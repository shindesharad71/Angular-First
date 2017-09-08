import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is Simply a test', 'http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg', [
      new Ingredient('Apples', 12),
      new Ingredient('Tomatoes', 2)
    ]),
    new Recipe('A Test Recipe 2', 'This is Simply a test 2', 'http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg', [
      new Ingredient('Apples', 12),
      new Ingredient('Tomatoes', 2)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
