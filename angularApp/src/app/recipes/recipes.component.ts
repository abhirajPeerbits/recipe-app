import { Component, OnInit } from '@angular/core';


import { from } from 'rxjs';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService],
})
export class RecipesComponent implements OnInit {
  // here we not assigne value but when event occure that time runtime recipe assigne to this file
  selectedRecipe : Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {

    
  }

}
