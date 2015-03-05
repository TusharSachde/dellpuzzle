var db = openDatabase('dellpuzzle', '1.0', 'Dell DB', 2 * 1024 * 1024);


db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS USERS (id Integer, name, email, phone,message text, dots, jerseyscore, testtime, certificate)');
    //tx.executeSql('DROP TABLE USERS');
});

var user = {};
var seconds = 0;
var minutes = 0;
var message ="";


var mydatabase = angular.module('mydatabase', [])
    .factory('MyDatabase', function ($location) {
        
        return {
            setuser : function()
            {
                tx.executeSql('SELECT `message` FROM USERS WHERE `id` ='+user.id, [], function(tx, results) {
                        var message = results.rows.item(0).message;
                    }, function(tx, results) {} );
            },
            signup : function(data)
            {
                var id = $.jStorage.get("id");
                id = id + 1;
                db.transaction(function (tx) {
    tx.executeSql('INSERT INTO USERS (id, name, email, phone) VALUES ('+id+',"'+data.name+'", "'+data.email+'", "'+data.phone+'")');
});
                $.jStorage.set("id", id);
                $location.path("/areyou");
            },
            setusermessage : function(data)
            {
                var id = $.jStorage.get("id");
                db.transaction(function (tx) {
    tx.executeSql('UPDATE USERS SET `message`= "'+data+'" WHERE `id` ='+id);
                });
            },
            setdots : function(data)
            {
                db.transaction(function (tx) {
    tx.executeSql('UPDATE USERS SET `dots`= "'+data+'" WHERE `id` ='+user.id);
                });
            },
            setjerseyscore : function(data)
            {
                var id = $.jStorage.get("id");
                db.transaction(function (tx) {
    tx.executeSql('UPDATE USERS SET `jerseyscore`= "'+data+'" WHERE `id` ='+id);
                });
            },
            settesttime : function(data)
            {
                db.transaction(function (tx) {
    tx.executeSql('UPDATE USERS SET `testtime`= "'+data+'" WHERE `id` ='+user.id);
                });
            },
            setcertificate : function(data)
            {
                db.transaction(function (tx) {
    tx.executeSql('UPDATE USERS SET `certificate`= "'+data+'" WHERE `id` ='+user.id);
                });
            },
            setmins : function(data)
            {
                minutes = data;
                
            },
            getmins : function()
            {
                    return minutes;
            },
            setseconds : function(data)
            {
                    seconds = data;
                //console.log(seconds);
            },
            getseconds : function()
            {
                //console.log(seconds);
                    return seconds;
            },
        }
    });