// miss up: 111

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  
 private ingredients : Ingredient[] =[ 
    new Ingredient('demoName',50000),
    new Ingredient('demoName1',500),
  ];

  constructor() { }

  getIngredient(){
    return this.ingredients;
    //here using slice() we also return copy of array
    //but here we return orignal array so we can add element in it.
    //here we need to careate ingredient change event.
  }

  //this method for add ingredient through textbox
  addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
  }

  // this method add for add ingredient to shopping list
  // it use in recipe service
  //here we recive list of ingredients
  addIngredients(ingredints:Ingredient[]){
    
    

    this.ingredients.push(...ingredints);

  }
}
