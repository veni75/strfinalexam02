import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Todo } from './model/todo';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos$: Observable<Todo[]> = this.todoService.getAll();

  selectedTodo: Todo = new Todo();
  phrase: string = '';
  columnKey: string = '';
  submitted:boolean = false;

  constructor(
    private todoService: TodoService,    
  ) { }

  onDelete(todo: Todo): void {
    if (!confirm("Biztos, hogy törlöd?")) {
      return;
    }
    this.todoService.delete(todo).subscribe(
      ()=>location.reload()
    );
  }

  onActive(todo: Todo): void {
    this.todoService.update(todo);
  }

  sorter(): void {
    this.columnKey = 'title';
  }

  onSubmit(form: NgForm, todo: Todo):void {
    this.submitted = true;
    this.todoService.create(todo).subscribe(
      ()=>location.reload()
    );
  }
}
