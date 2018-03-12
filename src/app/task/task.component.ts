import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  tasks = []

  constructor(private commonService : CommonService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(){
    //this.tasks.push({Name: 'Task 1', Description: 'Description 1'});
    this.commonService.getTasks().subscribe((data) => this.tasks = data);
  }

  addTask(){
    this.tasks.push({Id : -1, Name: '', Description: ''});
  }

  deleteItem(index){
    this.tasks.splice(index, 1);
    console.log('Delete id: ' + index);
  }

  saveTask(){
    console.log('Save task');
  }

  exportPDF(){
    console.log('Export PDF');
  }
}
