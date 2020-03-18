import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Todo} from '../models/Todo';
import { Observable } from 'rxjs';


const httpOptions={
  headers: new HttpHeaders({
    'Context-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  jsonPlaceholderUrl:string='https://jsonplaceholder.typicode.com/todos';
  todosLimit:String='?_limit=5';
  constructor(private http:HttpClient) { }
  //get todos
  getTodos():Observable<Todo[]>{
   return this.http.get<Todo[]>(this.jsonPlaceholderUrl+this.todosLimit);
  }
  //toggle completed
  toggleCompleted(todo:Todo):Observable<any>{
    const url='${this.jsonPlaceholderUrl}/${todo.id}';
    return this.http.put(url,todo,httpOptions);

  }
}
