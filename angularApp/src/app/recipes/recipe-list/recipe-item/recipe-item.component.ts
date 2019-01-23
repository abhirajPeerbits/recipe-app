// recipe item component create one recipe item 
// when we click perticuler item that time it navigate to perticuler recipe detail 


import { Component, OnInit, Input } from '@angular/core';


import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // here we retrive data from  [recipelist component] so we define here 
   @Input() recipe : Recipe;
   @Input() index : number;

  
  
  
  constructor() { }

  ngOnInit() {
   
  }

  
}
