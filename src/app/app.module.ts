import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddPetsComponent } from './components/add-pets/add-pets.component';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RehomeComponent } from './pages/rehome/rehome.component';
import { DogComponent } from './pages/dog/dog.component';
import { CatComponent } from './pages/cat/cat.component';
import { OtherpetComponent } from './pages/otherpet/otherpet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    AddPetsComponent,
    DetailsComponent,
    ListComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    SignUpPageComponent,
    SignUpComponent,
    AboutusComponent,
    RehomeComponent,
    DogComponent,
    CatComponent,
    OtherpetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
