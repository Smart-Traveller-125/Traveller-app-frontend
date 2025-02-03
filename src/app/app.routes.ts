import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RegisterComponent } from './features/register/register.component';
import { SignupComponent } from './features/signup/signup/signup.component';
import { ForgottenPasswordComponent } from './features/forgotten-password/forgotten-password.component';
import { PlacesComponent } from './features/places/places.component';
import { ViewdetailsComponent } from './features/viewdetails/viewdetails.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'login', component: SignupComponent},
  {path:'register', component:RegisterComponent},
  {path:'forgottenpassword' , component: ForgottenPasswordComponent},
  {path: 'places' , component:PlacesComponent},
  {path:'viewdetails' , component: ViewdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

