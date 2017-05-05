import { Routes, RouterModule } from '@angular/router';
import { FlightRoutes } from './flight/index';
import { HomeRoutes } from './home/index';
import { ComponentLibraryRoutes } from './component-library/index';


export const routes: Routes = [{
    path: '',
    redirectTo: '/componentlib',
    pathMatch: 'full'
},
...FlightRoutes,
...HomeRoutes,
...ComponentLibraryRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
