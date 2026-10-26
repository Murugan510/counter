import { Component, signal } from '@angular/core';
import { Todo } from './todo/todo';
import { Products } from './products/products';

@Component({
  selector: 'app-root',
  imports: [Todo, Products],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('counter');
}
