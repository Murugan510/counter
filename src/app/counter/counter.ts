import { Component,signal, Signal,computed } from '@angular/core';
import { SquarePipe } from '../square-pipe';

@Component({
  selector: 'app-counter',
  imports: [SquarePipe],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  count = signal(0);

  doubleCount : Signal<number> = computed(()=> this.count() * 2 );

  handleIncrement() {
    this.count.update(value => value + 1);
  }

  handleDecrement() {
    if(this.count() > 0) {
      this.count.update(value => value - 1);
    }
  } 
}
