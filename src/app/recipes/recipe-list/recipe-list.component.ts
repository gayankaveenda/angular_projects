import {Component, OnInit} from '@angular/core';

import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Apple Pie', 'Best quick dessert',
      'https://img.taste.com.au/Jz8OLy7E/w643-h428-cfill-q90/taste/2016/11/classic-apple-pie-84181-1.jpeg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
