var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice']);

phonecatControllers.controller('home',
    function ($scope, TemplateService, NavigationService, MyDatabase) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = 'views/home.html';
        $scope.submit = {};
        $scope.register = function (data) {
            MyDatabase.signup(data);
        };

        $scope.syncreview = function (userdata) {
            db.transaction(function (tx) {
                tx.executeSql('SELECT * FROM REVIEW WHERE `userid` = ' + userdata.id, [], function (tx, results) {
                    for (var i = 0; i < results.rows.length; i++) {
                        console.log(results.rows.item(0));
                        MyDatabase.sync(userdata, results.rows.item(0));
                        /*return $http.get(adminurl + "welcome/syncreview", {
                                params: {
                                    review: results.rows.item(i)
                                }
                            });*/
                        //tx.executeSql('UPDATE USERS SET `sync`= 1 WHERE `id` =' + results.rows.item(i).id);
                    }
                }, function (tx, results) {})
            });
        };

        $scope.sendtodb = function () {
            db.transaction(function (tx) {
                tx.executeSql('SELECT * FROM USERS WHERE `sync` = 0', [], function (tx, results) {
                    for (var i = 0; i < results.rows.length; i++) {
                        console.log(results.rows.item(i));
                        $scope.syncreview(results.rows.item(i));
                        tx.executeSql('UPDATE `USERS` SET `sync`= 1 WHERE `id` =' + results.rows.item(i).id);
                        /*return $http.get(adminurl + "welcome/syncuser", {
                                params: {
                                    user: results.rows.item(i)
                                }
                            });*/
                    }
                }, function (tx, results) {})
            });
            //MyDatabase.syncuser();
        };

    });
phonecatControllers.controller('timerCtrl',
    function ($scope, TemplateService, NavigationService, $interval, MyDatabase) {

        $scope.mins = MyDatabase.getmins();
        $scope.seconds = MyDatabase.getseconds();
        var timero = function () {
            $scope.seconds = $scope.seconds + 1;
            if ($scope.seconds == 60) {
                $scope.seconds = 0;
                $scope.mins = $scope.mins + 1;
            }
            MyDatabase.setmins($scope.mins);
            MyDatabase.setseconds($scope.seconds);
        };
        $interval(timero, 1000);
    });


phonecatControllers.controller('areyou',
    function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Are you Ready");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = 'views/areyou.html';
    });

phonecatControllers.controller('dots',
    function ($scope, TemplateService, NavigationService, $interval, $location, MyDatabase) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Connect the dots");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = 'views/dots.html';

        $scope.mins = MyDatabase.getmins();
        $scope.seconds = MyDatabase.getseconds();
        var timero = function () {
            $scope.seconds = $scope.seconds + 1;
            if ($scope.seconds == 60) {
                $scope.seconds = 0;
                $scope.mins = $scope.mins + 1;
            }
            MyDatabase.setmins($scope.mins);
            MyDatabase.setseconds($scope.seconds);
        };
        $interval(timero, 1000);

        $scope.gotomessage = function () {
            $interval.cancel(stop);
            $location.path('/message');
        };
    });

phonecatControllers.controller('message',
    function ($scope, TemplateService, NavigationService, $location, MyDatabase) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("My message for India");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = 'views/message.html';

        $scope.submitmessage = function () {
            var canvas = document.getElementById("canvase");
            var dataUrl = canvas.toDataURL();
            console.log(dataUrl);
            MyDatabase.setusermessage(dataUrl);
            $location.path("/next");
        };


    });

phonecatControllers.controller('next',
    function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Move to the next level");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = 'views/next.html';
    });

phonecatControllers.controller('jersey',
    function ($scope, TemplateService, NavigationService, $interval, $location, MyDatabase) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Match players jersey");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = 'views/jersey.html';

        $scope.mins = MyDatabase.getmins();
        $scope.seconds = MyDatabase.getseconds();
        var timero = function () {
            $scope.seconds = $scope.seconds + 1;
            if ($scope.seconds == 60) {
                $scope.seconds = 0;
                $scope.mins = $scope.mins + 1;
            }
            MyDatabase.setmins($scope.mins);
            MyDatabase.setseconds($scope.seconds);
        };
        $interval(timero, 1000);

        $scope.draggableObjects = [{
            name: '18'
        }, {
            name: '07'
        }, {
            name: '25'
        }, {
            name: '18'
        }];
        $scope.scoreshow = false;
        var gotothink = function () {
            $location.path("/think");
        };
        $scope.getresult = function () {
            $scope.score = 0;
            var score = 0;
            console.log($scope.draggableObjects);
            if ($scope.draggableObjects[0].name == '7') {
                score = score + 1
            };
            if ($scope.draggableObjects[1].name == '9') {
                score = score + 1
            };
            if ($scope.draggableObjects[2].name == '8') {
                score = score + 1
            };
            if ($scope.draggableObjects[3].name == '6') {
                score = score + 1
            };
            $scope.score = score;
            $scope.scoreshow = !$scope.scoreshow;
            MyDatabase.setjerseyscore(score);
            $interval(gotothink, 3000, 1);
            //$location.path("/think");
        };

        /*$scope.obj1 = {name: 'one'};
        $scope.obj2 = {name: 'two'};
        $scope.obj3 = {name: 'three'};
        $scope.obj4 = {name: 'four'};*/

        $scope.onDropComplete = function (index, obj, evt) {
            var otherObj = $scope.draggableObjects[index];
            var otherIndex = $scope.draggableObjects.indexOf(obj);
            $scope.draggableObjects[index] = obj;
            $scope.draggableObjects[otherIndex] = otherObj;
        };

    });

phonecatControllers.controller('think',
    function ($scope, TemplateService, NavigationService, $location, MyDatabase) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Tell us what you think");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = 'views/think.html';

        $scope.think = {};
        $scope.think.flexibility = 0;
        $scope.think.lightweight = 0;
        $scope.think.easytocarry = 0;
        $scope.think.allfeature = 0;
        $scope.think.screenclarity = 0;
        $scope.think.stylus = 0;
        $scope.think.easytouse = 0;
        $scope.think.otherfeature = "";
        $scope.think.travel = 0;
        $scope.think.harddrive = 0;
        $scope.think.alluse = 0;
        $scope.think.versatile = 0;
        $scope.think.builtinstylus = 0;
        $scope.think.otheruse = "";
        $scope.think.recommend = 1;
        $scope.think.updates = 0;

        $scope.thinksubmit = function () {
            console.log($scope.think);
            MyDatabase.saveuserreview($scope.think);
            $location.path("/select");
        };
    });

phonecatControllers.controller('certificate',
    function ($scope, TemplateService, NavigationService, $location, MyDatabase) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Thank You");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = 'views/certificate.html';

        //GET TIME
        $scope.mins = MyDatabase.getmins();
        $scope.seconds = MyDatabase.getseconds();
        //GET MESSAGE
        var id = $.jStorage.get("id");
        db.transaction(function (tx) {
            tx.executeSql('SELECT `message` FROM USERS WHERE `id` =' + id, [], function (tx, results) {
                $scope.imgsrc = results.rows.item(0).message;
                //document.getElementById('messimg').src = $scope.imgsrc;

                //var can = document.getElementById('canvas');
                //var ctx = can.getContext('2d');

                $(".messageimage").attr("src", $scope.imgsrc);
            }, function (tx, results) {});
        });
        //GET NAME
        db.transaction(function (tx) {
            tx.executeSql('SELECT `name` FROM USERS WHERE `id` =' + id, [], function (tx, results) {
                $scope.name = results.rows.item(0).name;
            }, function (tx, results) {});
        });



        $scope.logout = function () {
            html2canvas($("#savearea"), {
                onrendered: function (canvas) {
                    theCanvas = canvas;
                    document.body.appendChild(canvas);
                    console.log(canvas);
                    var dataUrl = canvas.toDataURL();
                    console.log(dataUrl);
                    MyDatabase.setcertificate(dataUrl);
                    // Convert and download as image
                    //console.log(Canvas2Image.convertToPNG(canvas, 500, 500));
                    //Canvas2Image.saveAsPNG(canvas);
                    //$("#img-out").append(canvas);
                    // Clean up 
                    document.body.removeChild(canvas);
                }
            });
            MyDatabase.setmins(0);
            MyDatabase.setseconds(0);
            $location.path("/home");
        };
    });

phonecatControllers.controller('headerctrl', ['$scope', 'TemplateService',
    function ($scope, TemplateService) {
        $scope.template = TemplateService;
    }
]);
phonecatControllers.controller('select',
    function ($scope, TemplateService, $location) {
        $scope.template = TemplateService;
        $scope.myInterval = 100000;
        $scope.slides = [{
            "image": "laptop1.png"
        }, {
            "image": "laptop2.png"
        }, {
            "image": "laptop3.png"
        }];

        $scope.gotocertificate = function (i) {
            $.jStorage.set("mode", i);
            $location.path("/certificate");
        };
    });