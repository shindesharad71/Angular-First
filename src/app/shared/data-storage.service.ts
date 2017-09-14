import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { RecipeService } from '../recipe/recipe.service';

@Injectable()

export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://angular-http-25969.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

}
