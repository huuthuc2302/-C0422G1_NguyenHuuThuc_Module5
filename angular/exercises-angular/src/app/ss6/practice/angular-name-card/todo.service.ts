import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "./todo/todo";
// import {environment} from "../../../../environments/environment";

// const API_URL = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>("http://localhost:3000/todos");
  }

  addNew(todo): Observable<Todo> {
    return this.http.post<Todo>("http://localhost:3000/todos", todo);
  }

  updateTodo(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>("http://localhost:3000/todos/" +id, todo);
  }

  delete(id: number): Observable<Todo> {
    return this.http.delete<Todo>("http://localhost:3000/todos/" +id);
  }
}
