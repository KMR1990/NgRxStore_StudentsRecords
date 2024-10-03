import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StudentsRecordsService } from '../students-records.service';
import { actionList } from './students-actions';
import { exhaustMap, map, catchError } from 'rxjs/operators'
import { EMPTY } from 'rxjs';


@Injectable()
export class StudentsRecordsEffects {
    
    constructor(private actions$ : Actions, private studentsRecordsService : StudentsRecordsService){}

    loadStudentsRecords = createEffect( () => this.actions$.pipe(
        ofType(actionList.callStudentsRecordsAPI),
        exhaustMap( () => this.studentsRecordsService.getStudentsRecords()
            .pipe(
                map( studentsRecords => ({type : actionList.callStudentsRecordsAPISuccess, payload : studentsRecords}) ),
                catchError( () => EMPTY)
        ))
    ));


}