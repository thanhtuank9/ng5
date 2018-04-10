import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

//const Json2csvParser = require('json2csv').Parser;

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
    this.commonService.getTasks().subscribe((data) => this.tasks = data.map(function(task){ return {Id : task._id, Name : task.Name, Description : task.Description }}));
  }

  addTask(){
    this.tasks.push({Id : -1, Name: '', Description: ''});
  }

  deleteItem(index,id){
    this.commonService.deleteTask(id).subscribe(
      (data) => {this.tasks.splice(index, 1); },
      (error) => { console.log(error); }
    );
  }

  saveTask(){
    let i = 0;
    this.tasks.forEach((task) => {
      this.commonService.saveTask(task).subscribe((data) => {
        
        i++;

        if(i == this.tasks.length){
          this.ngOnInit();
        }
      });
    });
    
  }

  exportPDF(){
    this.commonService.getTasks().subscribe((data) => {
      
      const fields = ['Name', 'Description'];
      //const json2csvParser = new Json2csvParser({ fields });
      //const csv = json2csvParser.parse(data);
      
      //console.log(csv);

      //this.downloadFile(csv);
    });
  }

  downloadFile(data){
        let blob = new Blob(['\ufeff' + data], { type: 'text/csv;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", "Task.csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
  }
}
