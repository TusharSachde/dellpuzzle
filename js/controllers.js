var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice',]);

phonecatControllers.controller('home',
    function($scope, TemplateService, NavigationService, MyDatabase) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = 'views/home.html';
    $scope.submit = {};
    $scope.register = function(data)
    {
        MyDatabase.signup(data);
    };
    });

phonecatControllers.controller('areyou',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Are you Ready");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = 'views/areyou.html';
    });

phonecatControllers.controller('dots',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Connect the dots");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = 'views/dots.html';
    });

phonecatControllers.controller('message',
    function($scope, TemplateService, NavigationService, $location) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("My message for India");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = 'views/message.html';
    
        $scope.submitmessage = function()
        {
            $location.path("/next");
        };
    });

phonecatControllers.controller('next',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Move to the next level");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = 'views/next.html';
    });

phonecatControllers.controller('jersey',
    function($scope, TemplateService, NavigationService, $interval, $location, MyDatabase) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Match players jersey");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = 'views/jersey.html';
    
    $scope.seconds = 0;
    $scope.mins = 0;
    var timero = function()
    {
        $scope.seconds = $scope.seconds + 1;
        if($scope.seconds == 60)
        {
            $scope.seconds = 0;
            $scope.mins = $scope.mins + 1;
        }
    }
    $interval(timero, 1000);
        
    $scope.draggableObjects = [
                    {name: '6'},
                    {name: '7'},
                    {name: '8'},
                    {name: '9'}
                ];
    $scope.scoreshow = false;
    var gotothink = function()
    {
        $location.path("/think");
    };
    $scope.getresult = function()
    {
        $scope.score = 0;
        var score = 0;
        console.log($scope.draggableObjects);
        if($scope.draggableObjects[0].name == '7')
        { score = score + 1};
        if($scope.draggableObjects[1].name == '9')
        { score = score + 1};
        if($scope.draggableObjects[2].name == '8')
        { score = score + 1};
        if($scope.draggableObjects[3].name == '6')
        { score = score + 1};
        $scope.score = score;
        $scope.scoreshow = !$scope.scoreshow;
        MyDatabase.setjerseyscore(score);
        $interval(gotothink, 3000, 1 );
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
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Tell us what you think");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = 'views/think.html';
    });

phonecatControllers.controller('certificate',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Thank You");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.content = 'views/certificate.html';
    });

phonecatControllers.controller('headerctrl', ['$scope', 'TemplateService',
    function($scope, TemplateService) {
        $scope.template = TemplateService;
    }
]);