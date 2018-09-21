//import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
//import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Store } from '@ngrx/store';
//import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions'



//@Injectable()
export class RecipeService {
    recipesChanged =  new Subject<Recipe[]>();
    
    //recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel', 
            'a test desc Schnitzel', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_91wsEKNq7aFwCOFs272h55ppkKcX_RNEzvdK4sZ-WGxR5LBQ',
            [
                new Ingredient('Meat',1),
                new Ingredient('French Fries',20)
            ]
            ),
        new Recipe(
            'Big Fat Burger', 
            'a test desc Burger', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLgzNkvMNLy1AS0zLHQxWnhIplp8ToJLmXRrXmhN4DTSeDtWQf',
            [
                new Ingredient('Buns',2),
                new Ingredient('Meat',20)
            ]
            )
      ];

    constructor(
                //private slService:ShoppingListService,
               // private store: Store<{shoppingList:{ingredients: Ingredient[]}}>
               ){}  

    setRecipes( recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

    // addIngredientsToShoppingList(ingredients : Ingredient[]){
    //     //this.slService.addIngredients(ingredients);
    //     this.store.dispatch( new ShoppingListActions.AddIngredients(ingredients));
    // }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}