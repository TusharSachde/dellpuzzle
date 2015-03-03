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
        }
    });