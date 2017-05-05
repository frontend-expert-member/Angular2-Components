"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var app_providers_1 = require("./app.providers");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var home_module_1 = require("./home/home.module");
var flight_module_1 = require("./flight/flight.module");
var shared_module_1 = require("./shared/shared.module");
var index_1 = require("./component-library/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            common_1.CommonModule,
            http_1.HttpModule,
            home_module_1.HomeModule,
            flight_module_1.FlightModule,
            shared_module_1.SharedModule,
            index_1.ComponentLibraryModule,
            app_routing_1.routing
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        providers: [app_providers_1.APP_PROVIDERS, app_routing_1.appRoutingProviders],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
