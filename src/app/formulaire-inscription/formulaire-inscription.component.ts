import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-formulaire-inscription',
  templateUrl: './formulaire-inscription.component.html',
  styleUrls: ['./formulaire-inscription.component.css']
})
export class FormulaireInscriptionComponent {

  
  submitted = false;

  onSubmit() { this.submitted = true; }

}
