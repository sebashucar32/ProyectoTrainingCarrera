import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PistaComponent } from './components/pista/pista.component';
import { ErrorComponent } from './error/error.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'pista', component: PistaComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
