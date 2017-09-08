import { Recipe } from './recipe.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is Simply a test', 'http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg'),
    new Recipe('A Test Recipe 2', 'This is Simply a test 2', 'http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
