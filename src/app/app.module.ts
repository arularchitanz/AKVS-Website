import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> 1b85c35bbb8566e9421bf323cbdb00a73a1b8de6

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { EmailService } from './components/services/email.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule
=======
    ReactiveFormsModule
>>>>>>> 1b85c35bbb8566e9421bf323cbdb00a73a1b8de6
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
