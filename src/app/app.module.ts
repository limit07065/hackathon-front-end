import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarPoolComponent } from './car-pool/car-pool.component';
import { BondHubComponent } from './bond-hub/bond-hub.component';
import { ExpertComponent } from './expert/expert.component';
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from "./home/home.component";
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient } from "@angular/common/http";
import { TimeoutInterceptor } from "./core/timeout-interceptor.";

@NgModule({
    declarations: [
        AppComponent,
        CarPoolComponent,
        BondHubComponent,
        ExpertComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        NgbModule,
    ],
    providers: [
        provideHttpClient(),
        {provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true}
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
