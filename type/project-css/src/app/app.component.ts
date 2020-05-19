import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'project-css';
  esconder= false;
  arregloNumeros=[{nombre: 'Diego'}, {nombre: 'Raúl'}];
  eventoClick(){
    this.esconder= true;

  }
}
