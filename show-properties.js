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
    var FriendService = (function () {
        function FriendService() {
            this.names = ["Tanvir", "Asif", "jahid", "Erfan"];
        }
        return FriendService;
    })();
    var DisplayComponent = (function () {
        function DisplayComponent(friendsService) {
            this.myName = "Atiq";
            this.names = friendsService.names;
            this.total = this.names.length;
        }
        DisplayComponent = __decorate([
            angular2_1.Component({
                selector: 'display',
                injectables: [FriendService]
            }),
            angular2_1.View({
                template: "\n\t <p> My name: {{myName}} </p>\n\t <p> Friends </p>\n\t <ul>\n\t \t<li *for=\"#name of names\">\n\t\t \t{{name}}\n\t\t</li>\n\t </ul>\n\t <p *if=\"names.length > 3\"> You have many friends! </p>\n\t <p *if=\"names.length <= 3\"> You have only {{total}} friend(s) </p>\n\t ",
                directives: [angular2_1.For, angular2_1.If]
            }), 
            __metadata('design:paramtypes', [FriendService])
        ], DisplayComponent);
        return DisplayComponent;
    })();
    angular2_1.bootstrap(DisplayComponent);
});
