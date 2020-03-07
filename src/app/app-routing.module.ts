import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationFormComponent } from './authentification-form/authentification-form.component';
import { PageaccueilComponent } from './pageaccueil/pageaccueil.component';

const routes: Routes = [
  {path: 'authentification-form', component: AuthentificationFormComponent},
  {path: 'pageaccueil', component: PageaccueilComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
