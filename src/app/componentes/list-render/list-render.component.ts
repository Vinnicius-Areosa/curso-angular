import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
animais: Animal[] = [
{nome: "larry", tipo: "dog", idade: 5 },
{nome: "miau", tipo: "cat", idade: 2},
{nome: "anita", tipo: "dog", idade: 12} ,
{nome: "LItajara", tipo: "horse", idade: 7},




]
}
