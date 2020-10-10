import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { FooterComponent } from './core/footer/footer.component';
import { SignInComponent } from './shared/sign-in/sign-in.component';
import { HomeComponent } from './home/home/home.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';
import { SignInModalComponent } from './shared/sign-in-modal/sign-in-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SignInComponent,
    HomeComponent,
    SignUpComponent,
    SignInModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
