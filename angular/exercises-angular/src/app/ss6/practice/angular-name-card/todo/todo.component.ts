import { Component, OnInit } from '@angular/core';
import {Todo} from "./todo";
import {FormControl, FormGroup} from "@angular/forms";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
  todoForm: FormGroup;

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.getAll().subscribe(
      todos => {
        this.todos = todos;
      });
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.addNew(todo).subscribe(
        () => {
        this.ngOnInit();
        this.content.reset();
      }
      );
    }
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

  edit(id: number) {
    const todo = this.todoForm.value;
    this.todoService.updateTodo(id, todo).subscribe(
      () => {
        alert('Cập nhật thành công');
      }, e => {
        console.log(e);
      }
    );

  }
}
