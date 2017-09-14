import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../recipe/recipe.model';

@Injectable()

export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://angular-http-25969.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://angular-http-25969.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            console.log(recipe);
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }

}
