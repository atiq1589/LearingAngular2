if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    ; /// <reference path="typings/angular2/angular2.d.ts" >
    var a2app = (function () {
        function a2app() {
            this.name = "md. atiqul islam";
        }
        a2app = __decorate([
            angular2_1.Component({ selector: 'my-app1' }),
            angular2_1.View({
                template: "<h1> Hello {{name}} </h1>"
            }), 
            __metadata('design:paramtypes', [])
        ], a2app);
        return a2app;
    })();
    var UrlHelper = (function () {
        function UrlHelper() {
            this.urlList = ['parent-child', 'todo', 'parent-child'];
        }
        UrlHelper = __decorate([
            angular2_1.Component({
                selector: 'nav-bar'
            }),
            angular2_1.View({
                template: "\n\t\t<ul> \n\t\t\t<li *for=\"#url of urlList\"> <a href=\"view/{{url}}.html\">{{url}}</a> \n\t\t\t</li>\n\t\t</ul>\n\t",
                directives: [angular2_1.For]
            }), 
            __metadata('design:paramtypes', [])
        ], UrlHelper);
        return UrlHelper;
    })();
    angular2_1.bootstrap(a2app);
    angular2_1.bootstrap(UrlHelper);
});
