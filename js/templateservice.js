var templateservicemod = angular.module('templateservicemod', []);
templateservicemod.service('TemplateService', function () {
    this.title = "Home";
    this.meta = "Google";
    this.metadesc = "Home";

    this.content = "views/content.html";
    
    var d=new Date();
    this.year=d.getFullYear();
});