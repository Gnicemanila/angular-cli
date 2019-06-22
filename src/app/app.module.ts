import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule,HttpClientJsonpModule} from "@angular/common/http";
import {NiceService} from "./nice.service"
import { DownloadComponent } from './components/download/download.component';
import { NowdownComponent } from './components/nowdown/nowdown.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DownloadComponent,
    NowdownComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [NiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
