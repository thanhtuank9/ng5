import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {

  idClicked: 0;
  dataTableConfig: any = [
    {
      fieldName: 'id'
    }, {
      fieldName: 'name'
    }, {
      fieldName: 'description'
    },
  ];
  data: any[] = [
    {
      id: 1,
      name: "Football",
      description: "Description of football"
    },
    {
      id: 2,
      name: "Music",
      description: "Description of music"
    },
    {
      id: 3,
      name: "Relax",
      description: "Description of relax"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.idClicked = $event
  }

}
