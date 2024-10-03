import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { studentReducer } from './State/students.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { StudentsRecordsEffects } from './State/students-recordsrds.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
              provideHttpClient(),
              provideClientHydration(), 
              provideAnimations(), 
              provideStore(),
              provideEffects(StudentsRecordsEffects),
              provideState({
                name : 'studentsRecords',
                reducer : studentReducer
              }),
              provideStoreDevtools({maxAge:25, logOnly:false})
            ]
};
