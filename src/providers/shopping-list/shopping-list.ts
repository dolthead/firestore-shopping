import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Grocery } from '../../models/grocery';
import { ShoppingList } from '../../models/shopping-list';

@Injectable()
export class ShoppingListProvider {
  userId: string;
  constructor(
    public fireStore: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {
    afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
      }
    });
  }

  async getTeamId(): Promise<string> {
    const userProfile: firebase.firestore.DocumentSnapshot = await firebase
      .firestore()
      .doc(`userProfile/${this.userId}`)
      .get();

    return userProfile.data().teamId;
  }

  /**
   * This provider should:
   *
   * Add a list of items from the GroceryList to said shopping list.
   *
   * Remove items of the shopping list without affecting the home's grocery list.
   *
   * Sync shopping list with grocery list at checkout -- adds newly bought groceries
   * to the home list.
   *
   * Show the price per unit for an item
   *
   * Calculate the total price of the item you're purchasing.
   *
   */

  getShoppingList(teamId: string): AngularFirestoreCollection<ShoppingList> {
    return this.fireStore.collection<ShoppingList>(
      `/teamProfile/${teamId}/shoppingList`
    );
  }
}
