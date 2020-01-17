import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeoplesListComponent } from './peoples-list/peoples-list.component';
import { PeoplesListService } from './peoples-list/peoples-list.service';

@NgModule({
  declarations: [
    AppComponent,
    PeoplesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ PeoplesListService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
