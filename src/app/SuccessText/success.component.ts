import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './Success.component.html',
  styleUrls: ['./Success.component.css']
})

export class SuccessComponent {
  showIt = false;
  logs = [1, 15];

  resetValue() {
    this.showIt = true;
    const a = 5 * Math.random();
    this.logs.push(a);
  }
}
