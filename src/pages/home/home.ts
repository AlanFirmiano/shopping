import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {ShoppingListService} from "../../services/shopping-list/shopping-list.service";
import {Observable} from "rxjs/Observable";
import {Item} from "../../models/item/item.module";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$: Observable<Item[]>;

  constructor(
    public navCtrl: NavController,
    private shopping: ShoppingListService
  ) {
    this.shoppingList$ = this.shopping
      .getShoppingList() //DB LIST
      .snapshotChanges() //KEY - VALUE
      .map(changes=>{
      return changes.map(c=>({
        key: c.payload.key,
        ...c.payload.val(),
      }));
    });
  }
// {
//   key: 'value-here',
//   nome: 'Notebook'
// }

}
