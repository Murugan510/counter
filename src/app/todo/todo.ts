import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


type ToDoTask = {
  name: string;
  status: 'pending' | 'completed'
}

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})

export class Todo {
  task = signal('');
  taskList = signal<ToDoTask[]>([]);

  handleAdd(): void {
    const newTask = this.task().trim();

    if (!newTask) {
      return;
    }

    this.taskList.update((tasks) => [
      ...tasks,
      { name: newTask, status: 'pending' }
    ]);
    this.task.set('');
  }

  handleStatusChange(event: Event, index: number): void {
    const checkbox = event.target as HTMLInputElement;
    this.taskList.update((tasks) =>
      tasks.map((task, taskIndex) =>
        taskIndex === index
          ? { ...task, status: checkbox.checked ? 'completed' : 'pending' }
          : task
      )
    );
  }

  RemoveItem(index:number){
    this.taskList.update((tasks) => tasks.filter((_, taskIndex) => taskIndex !== index));
  }
}
