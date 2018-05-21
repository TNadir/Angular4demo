import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite/favorite.component';
import { CalculatorComponent } from './calculator/calculator.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoriteComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
