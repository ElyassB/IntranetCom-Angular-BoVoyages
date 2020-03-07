import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationFormComponent } from './authentification-form/authentification-form.component';


const routes: Routes = [
  {path: 'authentification', component: AuthentificationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
