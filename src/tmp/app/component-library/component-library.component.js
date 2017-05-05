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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var component_library_service_1 = require("./component-library.service");
var ComponentLibraryComponent = (function () {
    function ComponentLibraryComponent(componentLibraryService) {
        var _this = this;
        this.componentLibraryService = componentLibraryService;
        this.searchComponent = '';
        componentLibraryService.getJSON().subscribe(function (data) {
            _this.libraryComponents = data.libraryComponent;
            _this.selectedComponent = _this.libraryComponents[0];
        }, function (error) {
            console.log(error);
        });
    }
    ComponentLibraryComponent.prototype.onSelect = function (libraryComponent) {
        this.selectedComponent = libraryComponent;
    };
    return ComponentLibraryComponent;
}());
ComponentLibraryComponent = __decorate([
    core_1.Component({
        selector: 'dl-component-library',
        templateUrl: 'app/component-library/component-library.component.html',
        styles: ['.section a.active{color:#fff}']
    }),
    __metadata("design:paramtypes", [component_library_service_1.ComponentLibraryServices])
], ComponentLibraryComponent);
exports.ComponentLibraryComponent = ComponentLibraryComponent;

//# sourceMappingURL=component-library.component.js.map
