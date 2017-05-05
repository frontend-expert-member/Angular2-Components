import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { HomeModule } from './home/home.module';
import { FlightModule } from './flight/flight.module';
import { SharedModule } from './shared/shared.module';
import { ComponentLibraryModule } from './component-library/index';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        HomeModule,
        FlightModule,
        SharedModule,
        ComponentLibraryModule,
        routing
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [APP_PROVIDERS, appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}
