"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var display_1 = require("../display/display");
var display_service_1 = require("../display/display.service");
var DisplayDetailsComponent = (function () {
    function DisplayDetailsComponent(displayService, route, location) {
        this.displayService = displayService;
        this.route = route;
        this.location = location;
    }
    DisplayDetailsComponent.prototype.ngOnInit = function () {
        this.getDisplayDetails();
    };
    DisplayDetailsComponent.prototype.getDisplayDetails = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.displayService.getDetails(id)
            .subscribe(function (data) { return _this.data = data; });
    };
    DisplayDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    return DisplayDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", display_1.Display)
], DisplayDetailsComponent.prototype, "data", void 0);
DisplayDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'display-details',
        templateUrl: './display-details.component.html',
        styleUrls: ['./display-details.component.ts']
    }),
    __metadata("design:paramtypes", [display_service_1.DisplayService,
        router_1.ActivatedRoute,
        common_1.Location])
], DisplayDetailsComponent);
exports.DisplayDetailsComponent = DisplayDetailsComponent;
//# sourceMappingURL=display-details.component.js.map