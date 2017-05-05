"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./flight/index");
var index_2 = require("./home/index");
var index_3 = require("./component-library/index");
exports.routes = [{
        path: '',
        redirectTo: '/componentlib',
        pathMatch: 'full'
    }].concat(index_1.FlightRoutes, index_2.HomeRoutes, index_3.ComponentLibraryRoutes);
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.routes);

//# sourceMappingURL=app.routing.js.map
