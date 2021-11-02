import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    // AppRoutingModule,
    // HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    // DashboardComponent,
    // HeroesComponent,
    // HeroDetailComponent,
    // MessagesComponent,
    // HeroSearchComponent,
    // HeroFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
