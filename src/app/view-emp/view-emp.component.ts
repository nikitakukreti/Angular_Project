import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  emp:Employee={
    id:1,
        name:"Priya",
        salary:10000,
        permanent:true,
        department:{
          department_id:101,
          department_name:"Payroll"
        },
        skills:[
            {id:1, name:"HTML"},
            {id:2, name:"CSS"},
            {id:3, name:"Javascript"},
        ],
        dateOfBirth:new Date('12/31/2000')
  }

}
