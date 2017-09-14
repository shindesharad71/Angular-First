import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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

  constructor(private slService: ShoppingService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
