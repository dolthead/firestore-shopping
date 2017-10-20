import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = 'InventoryPage';
  tab2Root = 'ShoppingListPage';

  constructor() {}
}
