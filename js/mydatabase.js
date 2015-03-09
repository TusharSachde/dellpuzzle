var db = openDatabase('dellpuzzle', '1.0', 'Dell DB', 2 * 1024 * 1024);
var adminurl = "http://dellallrounder.in/index.php/";


db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS USERS (id Integer, name, email, phone,message text, dots, jerseyscore, testtime, certificate text, sync Integer)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS REVIEW (userid Integer, flexibility Integer,lightweight Integer,easytocarry Integer,allfeature Integer,screenclarity Integer,stylus Integer,easytouse Integer, otherfeature, travel Integer, harddrive Integer, alluse Integer, versatile Integer, builtinstylus Integer, otheruse, recommend Integer, updates Integer)');
    //tx.executeSql('DROP TABLE USERS');
    //tx.executeSql('DROP TABLE REVIEW');
});

var user = {};
var seconds = 0;
var minutes = 0;
var message = "";


var mydatabase = angular.module('mydatabase', [])
    .factory('MyDatabase', function ($location, $http) {

        return {
            setuser: function () {
                tx.executeSql('SELECT `message` FROM USERS WHERE `id` =' + user.id, [], function (tx, results) {
                    var message = results.rows.item(0).message;
                }, function (tx, results) {});
            },
            signup: function (data) {
                var id = $.jStorage.get("id");
                id = id + 1;
                db.transaction(function (tx) {
                    tx.executeSql('INSERT INTO USERS (id, name, email, phone, sync) VALUES (' + id + ',"' + data.name + '", "' + data.email + '", "' + data.phone + '", 0)');
                });
                $.jStorage.set("id", id);
                console.log("inserted");
                $location.path("/areyou");
            },
            saveuserreview: function (data) {
                var id = $.jStorage.get("id");
                db.transaction(function (tx) {
                    tx.executeSql('INSERT INTO REVIEW (userid, flexibility, lightweight, easytocarry, allfeature, screenclarity, stylus, easytouse, otherfeature, travel, harddrive, alluse, versatile, builtinstylus, otheruse, recommend, updates) VALUES (' + id + ',"' + data.flexibility + '", "' + data.lightweight + '", "' + data.easytocarry + '", "' + data.allfeature + '", "' + data.screenclarity + '", "' + data.stylus + '", "' + data.easytouse + '", "' + data.otherfeature + '", "' + data.travel + '", "' + data.harddrive + '", "' + data.alluse + '", "' + data.versatile + '", "' + data.builtinstylus + '", "' + data.otheruse + '", "' + data.recommend + '", "' + data.updates + '")');
                });
            },
            setusermessage: function (data) {
                var id = $.jStorage.get("id");
                db.transaction(function (tx) {
                    tx.executeSql('UPDATE USERS SET `message`= "' + data + '" WHERE `id` =' + id);
                });
            },
            setdots: function (data) {
                db.transaction(function (tx) {
                    tx.executeSql('UPDATE USERS SET `dots`= "' + data + '" WHERE `id` =' + user.id);
                });
            },
            setjerseyscore: function (data) {
                var id = $.jStorage.get("id");
                db.transaction(function (tx) {
                    tx.executeSql('UPDATE USERS SET `jerseyscore`= "' + data + '" WHERE `id` =' + id);
                });
            },
            settesttime: function (min, secs) {
                var id = $.jStorage.get("id");
                var time = (min*60) + secs;
                db.transaction(function (tx) {
                    tx.executeSql('UPDATE USERS SET `testtime`= "' + time + '" WHERE `id` =' + id);
                });
            },
            setcertificate: function (data) {
                var id = $.jStorage.get("id");
                db.transaction(function (tx) {
                    tx.executeSql('UPDATE USERS SET `certificate`= "' + data + '" WHERE `id` =' + id);
                });
            },
            setmins: function (data) {
                minutes = data;

            },
            getmins: function () {
                return minutes;
            },
            setseconds: function (data) {
                seconds = data;
                //console.log(seconds);
            },
            getseconds: function () {
                //console.log(seconds);
                return seconds;
            },
            sync: function (userdata, reviewdata) {
                console.log(userdata);
                console.log(reviewdata);
                return $http.post(adminurl + "welcome/syncuser", {
                    user: userdata,
                    review: reviewdata
                });
            },
            syncreview: function (userdata) {
                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM REVIEW WHERE `userid` = ' + userdata.id, [], function (tx, results) {
                        for (var i = 0; i < results.rows.length; i++) {
                            console.log(results.rows.item(0));
                            this.sync(userdata, results.rows.item(0));
                            /*return $http.get(adminurl + "welcome/syncreview", {
                                params: {
                                    review: results.rows.item(i)
                                }
                            });*/
                            //tx.executeSql('UPDATE USERS SET `sync`= 1 WHERE `id` =' + results.rows.item(i).id);
                        }
                    }, function (tx, results) {})
                });
            },
            syncuser: function () {
                db.transaction(function (tx) {
                    tx.executeSql('SELECT * FROM USERS WHERE `sync` = 0', [], function (tx, results) {
                        for (var i = 0; i < results.rows.length; i++) {
                            console.log(results.rows.item(i));
                            console.log(this);
                            this.syncreview(results.rows.item(i));
                            tx.executeSql('UPDATE `USERS` SET `sync`= 1 WHERE `id` =' + results.rows.item(i).id);
                            /*return $http.get(adminurl + "welcome/syncuser", {
                                params: {
                                    user: results.rows.item(i)
                                }
                            });*/
                        }
                    }, function (tx, results) {})
                });

            },
        }
    });