import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
//import { ShoppingListService } from './shopping-list.service';
import { Store } from '@ngrx/store';
import * as fromShoppingList from './store/shopping-list.reducers';
import * as ShoppingListActions from './store/shopping-list.actions';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  // private subscription: Subscription;


  constructor(
    //private slService: ShoppingListService, 
    private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    //this.ingredients = this.slService.getIngredients();
    this.shoppingListState = this.store.select('shoppingList');
     
  }

  onEditItem(index: number){
    //this.slService.startedEditing.next(index);
    this.store.dispatch( new ShoppingListActions.StartEdit(index));
  }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }

  

}
