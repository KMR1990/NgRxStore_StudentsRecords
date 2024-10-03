import { StudentsRecords } from './students-records';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const getStudentRecords = createFeatureSelector<StudentsRecords>('studentsRecords');

export const selectAll = createSelector(getStudentRecords, (state: StudentsRecords) => {
    return state;
})