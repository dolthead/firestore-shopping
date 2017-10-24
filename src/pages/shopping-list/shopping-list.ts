import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InventoryProvider } from '../../providers/inventory/inventory';
import { Observable } from 'rxjs';
import { Grocery } from '../../models/grocery';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {
  groceryList: Observable<Grocery[]>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public inventoryProvider: InventoryProvider
  ) {}

  ionViewDidLoad() {
    this.inventoryProvider.getTeamId().then(teamId => {
      this.groceryList = this.inventoryProvider
        .getGroceryListForShoppingList(teamId, true)
        .valueChanges();
    });
  }

  pickQuantity(groceryId: string): void {
    console.log(groceryId);
  }

  addBulkGroceries(): void {
    this.navCtrl.push('ShoppingListAddPage');
  }

  addSingleGrocery(): void {
    console.log('Adding Groceries');
  }
}
