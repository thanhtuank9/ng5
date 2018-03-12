import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class CommonService {

  constructor(private http : Http) { }

  saveTask(task){
    return this.http.post('http://localhost:8080/api/saveTask',task).map((response : Response) => response.json());
  }


  getTasks(){
    return this.http.get('http://localhost:8080/api/gettasks').map((response : Response) => response.json());
  }

  deleteTask(id){
    return this.http.post('http://localhost:8080/api/deleteTask', {'id' : id}).map((response : Response) => response.json());
  }

}
