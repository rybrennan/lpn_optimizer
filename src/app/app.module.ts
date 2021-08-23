import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MaterialModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule  } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [AppComponent, CalendarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot(),
    MatFormFieldModule, 
    MatInputModule, 
    BrowserAnimationsModule, 
    // MaterialModule, // <----- this module will be deprecated in the future version.
    MatDatepickerModule, // <----- import(must)
    MatNativeDateModule, // <----- import for date formating(optional)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
