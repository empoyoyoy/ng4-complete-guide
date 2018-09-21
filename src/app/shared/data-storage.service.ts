import { Injectable } from "@angular/core";
//import { Http, Response } from "@angular/http";
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from "../recipes/recipe.service";
import 'rxjs/add/operator/map';
import { AuthService } from "../auth/auth.service";
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
//import { Body } from "@angular/http/src/body";

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient, 
                private recipeService: RecipeService,
                private authService: AuthService){}

    storeRecipes() {
        //const token = this.authService.getToken();
        //const header = new HttpHeaders().set('Authorization', 'Bearer ksdjhaksdjhkasdjh');
        // return this.httpClient.put('https://ng-recipe-book-d5a55.firebaseio.com/recipes.json',
        //     this.recipeService.getRecipes(), {
        //         // observe: 'events'
        //         observe: 'body',
        //         params: new HttpParams().set('auth',token)
        //         //headers: header
        //     });

        // progress type returns 1 upload and download requests
        const urlp = 'https://ng-recipe-book-d5a55.firebaseio.com/recipes.json'
        //declare request
        const req = new HttpRequest('PUT',
                                    urlp,
                                    this.recipeService.getRecipes(),
                                    {   
                                        reportProgress: true
                                        //params: new HttpParams().set('auth',token)
                                    }
                                    )
        return this.httpClient.request(req);

    }

    getRecipes(){
        //const token = this.authService.getToken();


        // this.httpClient.get<Recipe[]>('https://ng-recipe-book-d5a55.firebaseio.com/recipes.json?auth='
        //  + token)
         this.httpClient.get<Recipe[]>('https://ng-recipe-book-d5a55.firebaseio.com/recipes.json', {
             observe: 'body',
             responseType: 'json' // blob, arraybuffer,text
         }) 
            .map(
                (recipes) => {
                    console.log(recipes);
                    for ( let recipe of recipes) {
                        if( !recipe['ingredients']){
                            console.log(recipe);
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                   
                }
            )
            .subscribe(
                (recipes : Recipe[]) => {                    
                    this.recipeService.setRecipes(recipes);
                }
            );
    }


}