import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent {
  nome: string = 'vinnicius'
  userdata = {
    email: 'vinniciusareosa@gmail.com',
    funçao: 'admin'
  }
  title ='cursp-angular';
}
