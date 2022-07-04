import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PistaComponent } from './components/pista/pista.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetAccountComponent } from './auth/reset-account/reset-account.component';

const routes: Routes = [

  { path: 'pista', component: PistaComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'restAccount', component: ResetAccountComponent},
  { path: 'principal', component: ResetAccountComponent},
  { path: '**', pathMatch: 'full', redirectTo:'principal'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
