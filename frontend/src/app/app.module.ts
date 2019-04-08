import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationComponent } from './components/station/station.component';
import { BikeComponent } from './components/bike/bike.component';

@NgModule({
  declarations: [
    AppComponent,
    StationComponent,
    BikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
