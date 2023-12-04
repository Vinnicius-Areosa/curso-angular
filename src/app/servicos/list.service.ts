import { Injectable } from '@angular/core';
import { Animal } from '../animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable } from ‘rxjs’;


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 1 http://localhost:3000/animais’
constructor(private http: HttpClient) { }

remove(animais: Animal[],animal:Animal) {
console.log ('ativando serviços...')
return animais.filter ((a) => animal.nome !== a.nome);

}

getAll(): observable<Animal{]> {
  return this. http.get <Animal []>(this.apiUrl);
   } 
}


<div *ngIf="animal" class="aula"> 
    <p>detalhes-item works!</p> 
    <p>{{ animal.id }}</p> 
    <h1>{{ animal.nome }}</h1>
    <p>{{ animal.tipo }}</p> 
</div>


getItem(id: number): observable<Animal> { 
  return this.http.get<Animal>('${this.apiUrl}/${id}');
}