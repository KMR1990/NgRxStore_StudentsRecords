import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Store } from '@ngrx/store';

import { selectAll } from '../../State/students-selectors';
import { StudentsRecords } from '../../State/students-records';
import { Observable } from 'rxjs';
import * as Actions from '../../State/students-actions';



@Component({
  selector: 'app-students-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.css'
})
export class StudentsTableComponent {

  
  dataSource : any = [];
  dataSource$ : Observable<StudentsRecords> = this.store.select(selectAll);
  columnsToDisplay: string[] = ['name', 		
  'subject', 	
  'city', 		
  'state', 	
  'country', 	
  'address', 	
  'email', 	
  'phone', 	
  'postalcode'];

  constructor(private store : Store){
    this.store.dispatch(Actions.callStudentsRecordsAPI())
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataSource$.subscribe( (result : any) => {
      this.dataSource = result.studentsRecords;
    })
  }

}
