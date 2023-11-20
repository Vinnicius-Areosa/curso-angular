import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dados-pai',
  templateUrl: './dados-pai.component.html',
  styleUrls: ['./dados-pai.component.css']
})
export class DadosPaiComponent {
  @Input() nome: string = "";
  //@input() dadosUsu = {email: "", funcao: ""};
  @Input() dadosUsu!: {email: string, funcao: string};

};
