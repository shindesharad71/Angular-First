import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Vada Paav',
    'Vada pav, sometimes spelled Wada Pav or Vada Pav or Wada Pao, is a vegetarian fast food dish native to the Indian state of Maharashtra. The dish is a simple creation involving a deep fried potato patty with some coriander and spices, served in a bread roll (pav) with condiments. Usually people eat it with chatni and onions It originated as cheap street food in Mumbai, but is now offered in stalls and restaurants throughout India.',
    'http://www.dfordelhi.in/wp-content/uploads/2016/05/vada-pav-7.jpg', [
      new Ingredient('Potato', 2),
      new Ingredient('Bread', 1)
    ]),
    new Recipe('Dosa',
    'Dosa is a type of pancake from the Indian subcontinent, made from a fermented batter. It is somewhat similar to a crepe in appearance. Its main ingredients are rice and black gram. Dosa is a typical part of the South Indian diet and popular all over the Indian subcontinent. Traditionally, Dosa is served hot along with sambar, stuffing of potatoes or paneer and chutney. It can be consumed with idli podi as well.',
    'http://www.ndtv.com/cooks/images/mysore.masala.dosa.1%20%281%29.jpg', [
      new Ingredient('Rice', 12),
      new Ingredient('Potatoes', 2)
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
