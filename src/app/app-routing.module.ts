import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { AddPetsComponent } from './components/add-pets/add-pets.component';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import{LoginComponent}from'./components/login/login.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/add-pets' },
  { path: 'list', component: ListComponent },
  { path: 'add-pets', component: AddPetsComponent },
  { path: 'edit/:id', component: DetailsComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'HomePage', component: HomeComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'SignUp', component: SignUpPageComponent },
  { path: 'Login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
