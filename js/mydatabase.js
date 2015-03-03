var db = openDatabase('dellpuzzle', '1.0', 'Dell DB', 2 * 1024 * 1024);


db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS USERS (id Integer PRIMARY KEY AUTOINCREMENT, name, email, phone,message, dots, jerseyscore, testtime, certificate)');
    //tx.executeSql('DROP TABLE USERS');
});

var user = {};


var mydatabase = angular.module('mydatabase', [])
    .factory('MyDatabase', function ($location) {
        var users = [];
        
        user = $.jStorage.get("user");
        return {
            signup : function(data)
            {
                db.transaction(function (tx) {
    tx.executeSql('INSERT INTO USERS (id, name, email, phone) VALUES ('+data.id+', "'+data.name+'", "'+data.email+'", "'+data.phone+'")');
});
            },
            setmessage : function(data)
            {
                db.transaction(function (tx) {
    tx.executeSql('UPDATE USERS SET `message`= "'+data+'" WHERE `id` ='+user.id);
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
                db.transaction(function (tx) {
    tx.executeSql('UPDATE USERS SET `jerseyscore`= "'+data+'" WHERE `id` ='+user.id);
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
            getmessage : function()
            {
                db.transaction(function (tx) {
    tx.executeSql('SELECT `message` FROM USERS WHERE `id` ='+user.id, [], function(tx, results) {
                        var message = results.rows.item(0).message;
                    }, function(tx, results) {} );
                });
            },
        }
    });