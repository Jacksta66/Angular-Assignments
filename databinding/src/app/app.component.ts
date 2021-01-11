import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';
  evensArray : number[] = []
  oddsArray : number[] = []


  onGetNumberCreatedEvent(numberData: {number: number}) {
    if (numberData.number %2 === 0) {
      this.evensArray.push(numberData.number);
    } else  {
      this.oddsArray.push(numberData.number);
    }
  }

  onGetGameStoppedEvent() {
    this.evensArray.length = 0;
    this.oddsArray.length = 0;
  }
}


