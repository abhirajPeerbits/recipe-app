import { Component, OnInit,} from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // we never use supewr child event in parant so we need to create one more event
  //Output bcoz  use in main recipes  component

  // here we recive recipe and use in recipe-detail component & 
  recipes : Recipe[];
  
  constructor(private recipeService : RecipeService,
              private _router : Router,
              private _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this._router.navigate(['new'], {relativeTo : this._activatedRoute});
  }

  

}
