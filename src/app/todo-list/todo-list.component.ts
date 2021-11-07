import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: []
})
export class TodoListComponent implements OnInit, OnDestroy {
  public all: any;
  Items: any;

  begin() {
    if (localStorage.getItem("AllJob")) {
      this.all= localStorage.getItem("AllJob");
      this.Items= JSON.parse(this.all);
    } else {
      this.Items = [];
      localStorage.setItem("AllJob", this.Items);
    }
  }

  constructor() {
  
  }

  ngOnInit() {
    this.begin();
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
    localStorage.setItem("AllJob", JSON.stringify(this.Items));
  }

  changeStt(e:any) {
    localStorage.setItem("AllJob", JSON.stringify(this.Items));    
  }

  achive(e:any) {
    var i = e.length;
    while (i--) {
      e.forEach((index: any, number: any) => {
        if (index.done == true) {
          e.splice(number, 1);
        }
      });
      console.log(this.Items);
      localStorage.setItem("AllJob", JSON.stringify(this.Items));
    }
  }

}

