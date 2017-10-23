import { Component } from '@angular/core';
import {
  Alert,
  AlertController,
  IonicPage,
  Loading,
  LoadingController,
  NavController
} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryProvider } from '../../providers/inventory/inventory';

@IonicPage()
@Component({
  selector: 'page-shopping-list-create',
  templateUrl: 'shopping-list-create.html'
})
export class ShoppingListCreatePage {
  createShoppingListForm: FormGroup;
  teamId: string;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public inventoryProvider: InventoryProvider,
    formBuilder: FormBuilder
  ) {
    this.createShoppingListForm = formBuilder.group({
      date: ['', Validators.compose([Validators.required])]
    });
  }

  createShoppingList(): void {
    console.log(this.createShoppingListForm.value.date);
  }
}
