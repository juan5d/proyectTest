import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './components/map/map.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DataTablesModule } from "angular-datatables";
import { TabletComponent } from './components/tablet/tablet.component';
import { CartsComponent } from './components/carts/carts.component';

@NgModule({
  declarations: [
    AppComponent, MapComponent, TabletComponent
  ],
  imports: [
    GoogleMapsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    ComponentsModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
