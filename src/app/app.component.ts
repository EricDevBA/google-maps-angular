import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  texto = 'Bem Vindo a Salvador - BA';
  lat = -12.9711100;
  long = -38.5108300;
  zoom = 15;

}
