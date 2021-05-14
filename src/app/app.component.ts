import { Component } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learning';
  favoriteMovie='Lord of the Rings';

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
