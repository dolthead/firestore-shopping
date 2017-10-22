import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Grocery } from '../../models/grocery';

// import { userProfile } from '../../models/user-profile';
// import { Observable } from 'rxjs';

@Injectable()
export class InventoryProvider {
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

  /**
  * What do I need to do?
  * Create a new grocery.
  * Enter a detail view for a grocery
  * Add groceries to inventory
  * Remove groceries from inventory
  */

  async getTeamId(): Promise<string> {
    const userProfile: firebase.firestore.DocumentSnapshot = await firebase
      .firestore()
      .doc(`userProfile/${this.userId}`)
      .get();

    return userProfile.data().teamId;
  }

  getGroceryList(teamId: string): AngularFirestoreCollection<Grocery> {
    return this.fireStore.collection<
      Grocery
    >(`/teamProfile/${teamId}/groceryList`, ref => ref.orderBy('quantity'));
  }

  addGrocery(
    name: string,
    quantity: number,
    units: string,
    teamId: string
  ): Promise<void> {
    const groceryId: string = this.fireStore.createId();

    return this.fireStore
      .doc<Grocery>(`/teamProfile/${teamId}/groceryList/${groceryId}`)
      .set({ id: groceryId, name, quantity, units });
  }
}
