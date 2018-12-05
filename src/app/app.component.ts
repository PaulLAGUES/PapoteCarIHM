import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'papoteCar';
  menu = new Array('Rechercher','Proposer un trajet', 'Inscription', 'Connexion');


  }

