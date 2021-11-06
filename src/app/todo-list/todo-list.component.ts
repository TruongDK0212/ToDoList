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
    // this.Items = [newJob]; đề phòng trường hợp xóa hết dữ liệu ở local
    var alljob = JSON.stringify(this.Items);
    localStorage.setItem("AllJob", alljob);
    // job = '';
  }

  changeStt(e:any) {
    var alljob = JSON.stringify(this.Items);
    localStorage.setItem("AllJob", alljob);
    
  }
  achive(e:any) {
    e.forEach((index: any, number: any) => {
      // console.log(index);
      // console.log(number);
      // this.Items.splice(number, 1);
      if (index.done) {
        this.Items.splice(number, 1);
      }
    });
    console.log(this.Items);
  }

}
