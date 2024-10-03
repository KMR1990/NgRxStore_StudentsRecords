import { createAction, props } from "@ngrx/store"
import { StudentsRecords } from "./students-records";


export const actionList = {
    callStudentsRecordsAPI : "[ Students Table Component] Call Students Records API ",
    callStudentsRecordsAPISuccess : "[ Students Table Component] Call Students Records API Success"
}

export const callStudentsRecordsAPI = createAction(actionList.callStudentsRecordsAPI);
export const callStudentsRecordsAPISuccess = createAction(actionList.callStudentsRecordsAPISuccess, props<{payload : StudentsRecords}>());