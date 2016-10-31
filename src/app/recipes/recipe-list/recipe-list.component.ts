import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [];
	recipe = new Recipe('Test', 'Test', 'http://thumbs1.ebaystatic.com/d/1225/m/mfXELL6zPWJE40C0agiXMZw.jpg');

  constructor() { }

  ngOnInit() {
  }

}
