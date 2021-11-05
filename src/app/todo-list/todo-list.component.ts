import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  public all: any = localStorage.getItem("AllJob");
  Items: any = JSON.parse(this.all);
  
  constructor() {}

  ngOnInit() {

  }

  ngOnDestroy() {
    this.Items = null;
  }

  addJob(job:string, from: string, to:string) {
    var newJob = {
      description: job, done: false, from_date: from, to_date: to
    }
    this.Items.unshift(newJob);
    console.log(newJob);
    // this.Items = [newJob];
    var alljob = JSON.stringify(this.Items);
    localStorage.setItem("AllJob", alljob);
  }

  marked = false;
  changeStt(e:any) {
    console.log(this.Items);
    var alljob = JSON.stringify(this.Items);
    localStorage.setItem("AllJob", alljob);
    
  }
  // achive(e:any) {
  //   // this.oldToDo = this.Items;
  //   // this.Items = '';
  //   // this.oldToDo.array.forEach((item: { done: any; }) => {
  //   //   if (!item.done) this.Items.unshift(item);
  //   // });
  //   console.log(typeof e);
  //   console.log(e);
  //   e.forEach((index: any) => {
  //     console.log(index);
  //     // if (!index.done) this.Items.unshift(index);
  //   });
  //   // this.Items.forEach((e: any) => {
  //   //   if (!e.done) this.Items.unshift(e);
  //   // });
  //   // console.log(this.Items);
  // }
  // angular.forEach(oldTodos, function(todo) {
  //   if (!todo.done) todoList.todos.push(todo);
  // });

}
