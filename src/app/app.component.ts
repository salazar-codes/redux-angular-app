import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';

  contador: number = 0;

  constructor(){
    this.contador = 10;
  }

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }
}
