import { createReducer, on } from "@ngrx/store";
import { StudentsRecords } from "./students-records";
import * as Actions from './students-actions';


export const initialState: {studentsRecords : StudentsRecords[]} = {
    studentsRecords : [{
        name : "K MANI RAJA",
        subject : "SOFTWARE IT",
        city : "Hyderabad",
        state : "Telangana",
        country : "INDIA",
        address : "plot no 540, Gachibowli",
        email : "test@gmail.com",
        phone : "9876543210",
        postalcode : 500046
    }]
}

export const studentReducer = createReducer(
    initialState,
    on( Actions.callStudentsRecordsAPISuccess, (state:any, {payload}:any) => ({...state, studentsRecords : payload}))
)


