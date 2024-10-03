import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StudentsRecords } from './State/students-records';

@Injectable({
  providedIn: 'root'
})
export class StudentsRecordsService {

  constructor(private http : HttpClient) { }

  getStudentsRecords(){
    return this.http.get<Array<StudentsRecords>>("http://localhost:3000/studentsRecords")
  }

}
