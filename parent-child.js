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
    ; /// <reference path="typings/angular2/angular2" />
    var Child = (function () {
        function Child() {
            this.message = "Child";
        }
        Child = __decorate([
            angular2_1.Component({ selector: "child" }),
            angular2_1.View({
                template: '<p> This is <i> {{message}}</i> </p>'
            }), 
            __metadata('design:paramtypes', [])
        ], Child);
        return Child;
    })();
    var Parent = (function () {
        function Parent() {
            this.message = "Parent";
        }
        Parent = __decorate([
            angular2_1.Component({
                selector: "parent"
            }),
            angular2_1.View({
                template: "\n\t\t<p> This is <b> {{message}} </b> </p>\n\t\t<child></child>\n\t",
                directives: [Child]
            }), 
            __metadata('design:paramtypes', [])
        ], Parent);
        return Parent;
    })();
    angular2_1.bootstrap(Parent);
});
