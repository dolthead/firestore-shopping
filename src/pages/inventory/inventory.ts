import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InventoryProvider } from '../../providers/inventory/inventory';
import { Grocery } from '../../models/grocery';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html'
})
export class InventoryPage {
  groceryList: Observable<Grocery[]>;

  constructor(
    public navCtrl: NavController,
    public inventoryProvider: InventoryProvider
  ) {}

  ionViewDidLoad() {
    this.inventoryProvider.getTeamId().then(teamId => {
      this.groceryList = this.inventoryProvider
        .getGroceryList(teamId)
        .valueChanges();
    });
  }

  addGrocery(): void {
    this.navCtrl.push('InventoryAddPage');
  }
}
