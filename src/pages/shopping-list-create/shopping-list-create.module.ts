import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingListCreatePage } from './shopping-list-create';

@NgModule({
  declarations: [
    ShoppingListCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingListCreatePage),
  ],
})
export class ShoppingListCreatePageModule {}
