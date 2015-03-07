var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice']);

phonecatControllers.controller('home',
    function ($scope, TemplateService, NavigationService, MyDatabase) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = 'views/home.html';
        $scope.submit = {
            name: "",
            email: "",
            phone: ""
        };
        $scope.register = function (data) {
            MyDatabase.signup(data);
        };

        $scope.isNumberKey = function (evt) {
            var charCode = (evt.which) ? evt.which : event.keyCode
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;
            return true;
        };

        $scope.myRegex = $scope.myRegex = /[0-9]{6,6}/;



    });
/*phonecatControllers.controller('timerCtrl',
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
    });*/


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

        $scope.mins = 0; //MyDatabase.getmins();
        $scope.seconds = 0; //MyDatabase.getseconds();
        var timero = function () {
            $scope.seconds = $scope.seconds + 1;
            if ($scope.seconds == 60) {
                $scope.seconds = 0;
                $scope.mins = $scope.mins + 1;
            }
            //MyDatabase.setmins($scope.mins);
            //MyDatabase.setseconds($scope.seconds);
            $.jStorage.set("mins", $scope.mins);
            $.jStorage.set("seconds", $scope.seconds);
        };
        var timerinterval = $interval(timero, 1000);

        $scope.gotomessage = function () {
            $interval.cancel(timerinterval);
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

        $scope.mins = $.jStorage.get("mins"); //MyDatabase.getmins();
        $scope.seconds = $.jStorage.get("seconds"); //MyDatabase.getseconds();
        var timero = function () {
            $scope.seconds = $scope.seconds + 1;
            if ($scope.seconds == 60) {
                $scope.seconds = 0;
                $scope.mins = $scope.mins + 1;
            }
            //MyDatabase.setmins($scope.mins);
            //MyDatabase.setseconds($scope.seconds);
            $.jStorage.set("mins", $scope.mins);
            $.jStorage.set("seconds", $scope.seconds);
        };
        var timerinterval = $interval(timero, 1000);

        $scope.draggableObjects = [{
            name: '03',
            value: false
        }, {
            name: '25',
            value: false
        }, {
            name: '18',
            value: false
        }, {
            name: '07',
            value: false
        }];
        $scope.scoreshow = false;
        var gotothink = function () {
            MyDatabase.settesttime($scope.mins, $scope.seconds);
            $interval.cancel(timerinterval);
            $location.path("/think");
        };

        //SUBMIT BUTTON
        $scope.showbutton = true;
        $scope.getresult = function () {
            $scope.showbutton = false;
            $scope.score = 0;
            var score = 0;
            console.log($scope.draggableObjects);
            if ($scope.draggableObjects[0].name == '07') {
                score = score + 1
            };
            if ($scope.draggableObjects[1].name == '18') {
                score = score + 1
            };
            if ($scope.draggableObjects[2].name == '25') {
                score = score + 1
            };
            if ($scope.draggableObjects[3].name == '03') {
                score = score + 1
            };
            $scope.score = score;
            $scope.scoreshow = !$scope.scoreshow;
            MyDatabase.setjerseyscore(score);
            $interval(gotothink, 3000, 1);
            //$location.path("/think");
        };

        $scope.onDropComplete = function (index, obj, evt) {
            var otherObj = $scope.draggableObjects[index];
            var otherIndex = $scope.draggableObjects.indexOf(obj);
            $scope.draggableObjects[index] = obj;
            $scope.draggableObjects[otherIndex] = otherObj;

            if ($scope.draggableObjects[0].name == '07') {
                $scope.draggableObjects[0].value = true;
                console.log($scope.draggableObjects[0].value);
            }else {
                $scope.draggableObjects[0].value = false;
            };
            if ($scope.draggableObjects[1].name == '18') {
                $scope.draggableObjects[1].value = true;
                console.log($scope.draggableObjects[1].value);
            }else {
                $scope.draggableObjects[1].value = false;
            };;
            if ($scope.draggableObjects[2].name == '25') {
                $scope.draggableObjects[2].value = true;
                console.log($scope.draggableObjects[2].value);
            }else {
                $scope.draggableObjects[2].value = false;
            };;
            if ($scope.draggableObjects[3].name == '03') {
                $scope.draggableObjects[3].value = true;
            }else {
                $scope.draggableObjects[3].value = false;
            };;
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
        $scope.think.updates = 1;

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

    
        $scope.uname = "";
        //GET MODE
        var mode = $.jStorage.get("mode");
        //GET CLASS
        $scope.laptopclass = "lappy";
        if (mode == 0) {
            $scope.laptopclass = "lappy";
        };
        if (mode == 1) {
            $scope.laptopclass = "tent";
        }
        if (mode == 2) {
            $scope.laptopclass = "display";
        }
        //GET TIME
        $scope.mins = $.jStorage.get("mins"); //MyDatabase.getmins();
        $scope.seconds = $.jStorage.get("seconds"); //MyDatabase.getseconds();
        //GET MESSAGE
        var id = $.jStorage.get("id");
        db.transaction(function (tx) {
            tx.executeSql('SELECT `message`, `name` FROM USERS WHERE `id` =' + id, [], function (tx, results) {
                //$scope.uname = results.rows.item(0).name;
                //console.log($scope.uname);
                $scope.imgsrc = results.rows.item(0).message;
                console.log($scope.imgsrc);
                //document.getElementById('messimg').src = $scope.imgsrc;

                //var can = document.getElementById('canvas');
                //var ctx = can.getContext('2d');

                $(".messageimage").attr("src", $scope.imgsrc);
                $scope.uname = results.rows.item(0).name;
                console.log($scope.uname);
            }, function (tx, results) {});
        });
        
        //GET NAME
    $scope.name = function() {
        db.transaction(function (tx) {
            tx.executeSql('SELECT `name` FROM USERS WHERE `id` =' + id, [], function (tx, results) {
                $scope.uname = results.rows.item(0).name;
                console.log($scope.uname);
                return $scope.uname;
            }, function (tx, results) {});
        });
    };



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
            //MyDatabase.setmins(0);
            //MyDatabase.setseconds(0);
            $.jStorage.set("mins", 0);
            $.jStorage.set("seconds", 0);
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
            "image": "laptop1.png",
            "mode": "Laptop Mode"
        }, {
            "image": "laptop2.png",
            "mode": "Display Mode"
        }, {
            "image": "laptop3.png",
            "mode": "Tent Mode"
        }];

        $scope.gotocertificate = function (i) {
            $.jStorage.set("mode", i);
            $location.path("/certificate");
        };
    });
phonecatControllers.controller('sync',
    function ($scope, TemplateService, NavigationService, MyDatabase) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Sync");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = 'views/sync.html';

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
                    if (results.rows.length == 0) {
                        console.log("No data to sync");
                    };
                }, function (tx, results) {
                    console.log("No data to sync");
                })
            });
            //MyDatabase.syncuser();
        };
    });