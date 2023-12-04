import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/animal';
import {Listservice} from 'src/app/servicos/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit { 
  animais: Animal[] = [];
  /*
  animals: Animal[] = [
      { 'nome': 'Larry', 'tipo': 'cachorro', 'idade': 7 },
      { 'nome': 'Miao', 'tipo': 'gato', 'idade': 2 },
      { 'nome': 'Anita', 'tipo': 'cachorro', 'idade': 12 },
      { 'nome': 'Itajara', 'tipo': 'cavalo', 'idade': 5 }
   
  ]
  */
  idadeAnimal = ‘ ‘;
  constructor(private listService: ListService) {
    this.getAnimais();
   }
  
   ngOnInit(): void {
   }
  mostrarIdade (animal: Animal) {
  this. idadeAnimal  =  ‘$ animal.nome}( $ { animal.tipo }) tem ${animal.idade} anos!’;
  }
  removeAnimal(animal: Animal) {
      console.log('Removendo animal...');
      this.animais = this.listService.remove(this.animais, animal);
  }
   getAnimais() {
      this.listService.getAll().subscribe (( animais) => ( this.animais = animai) );
   }
   removeAnimal(animal: Animal) {
    // Removendo animal no front-end
    this.animais = this.animais.filter((a) => animal.nome !== a.nome)
    // Chamada ao serviço para remover o animal no BD
    this.listService.remove(animal.id) .subscribe();
   }
   remove(id:number) {
     return this.http.delete<Animal>('${this.apiUrl}/${id}');
     setItem(animal: Animal): Observable<Animal> {

        return this.http.post<Animal>
     }
   }
