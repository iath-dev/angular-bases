import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  time: number = 0;

  base: number = 5;

  acumular(value: number) {
    this.time += value
  }
}
