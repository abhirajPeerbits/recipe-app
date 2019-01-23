import {  Injectable } from '@angular/core';


import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
 

@Injectable()
export class RecipeService {

  

  

  private  recipes : Recipe[] = [
    new Recipe('gujarati thaali',
                'contain gujarati food','https://upload.wikimedia.org/wikipedia/commons/a/a8/The_Gujarati_Thali.jpg',
                  [
                    new Ingredient('rise',1),
                    new Ingredient('ras',44)
                  ]
                    
                ),
    
    new Recipe('panjabi thali',
                'contain punjabi food','https://c1.staticflickr.com/8/7196/6874745684_da8b1479ff_b.jpg',
                [
                  new Ingredient('nimboo',1),
                    new Ingredient('masala',11)
                ]
                
              ),
  ];
 
  constructor(private slService:ShoppingListService) { } 

  getRecipes(){
    return this.recipes.slice();
   
  }

  getRecipe(index:number)
  {
    return this.recipes[index];
  }

  //this method use in recipe detail componnt for add ingredient to shopping list.
  addIngredientToShoppingList(ingredients : Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
