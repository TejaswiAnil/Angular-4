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
//import { MockData } from './mock-display' -------replacing with services
var display_service_1 = require("./display.service");
var DisplayComponent = (function () {
    function DisplayComponent(displayService) {
        this.displayService = displayService;
    }
    DisplayComponent.prototype.ngOnInit = function () {
        this.displayStr = "Display Component";
        //this.dataList=MockData;  -------replacing with services
        this.getData();
    };
    /*selectedItem(list: Display) {
        this.selectedVal = list;
    }*/
    DisplayComponent.prototype.getData = function () {
        var _this = this;
        this.displayService.getData()
            .subscribe(function (dataList) { return _this.dataList = dataList; });
    };
    return DisplayComponent;
}());
DisplayComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-display',
        templateUrl: './display.component.html',
        styleUrls: ['./display.component.css']
    }),
    __metadata("design:paramtypes", [display_service_1.DisplayService])
], DisplayComponent);
exports.DisplayComponent = DisplayComponent;
//# sourceMappingURL=display.component.js.map