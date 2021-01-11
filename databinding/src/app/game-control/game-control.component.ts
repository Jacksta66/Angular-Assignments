import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  incrementingNumber : number = 0;
  interval;
  @Output() numberCreated = new EventEmitter<{number: number}>();
  @Output() gameStopped = new EventEmitter<{}>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartTimer() {
    this.interval = setInterval(() => {
      this.incrementingNumber ++;
      console.log(this.incrementingNumber)
      this.numberCreated.emit({
       number: this.incrementingNumber
      })
    }, 1000);
  }

  onStopTimer() {
    clearInterval(this.interval);
    this.incrementingNumber = 0;
    console.log("interval stopped and number set to 0");
    this.gameStopped.emit({});
  }

}
