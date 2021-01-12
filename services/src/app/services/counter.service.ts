import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {

  deactivateUserAction: number = 0;
  activateUserAction: number = 0;

  countActions(active: Boolean) {
    if (active) {
      this.activateUserAction++;
      console.log('activate user action called. total calls: ' + this.activateUserAction);
    } else {
      this.deactivateUserAction++;
      console.log('deactivate user action called. total calls: ' + this.deactivateUserAction);
    }
  }
}
