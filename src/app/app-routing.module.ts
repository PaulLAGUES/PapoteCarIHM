import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';
import { ConnexionUserComponent } from './connexion-user/connexion-user.component';

const routes: Routes = [
  { path: 'formulaire-inscription', component: FormulaireInscriptionComponent },
  { path: 'connexion', component: ConnexionUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
