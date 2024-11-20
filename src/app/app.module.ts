import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import{HttpClientModule} from '@angular/common/http';
import { AddstudentComponent } from './addstudent/addstudent.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditstudentComponent } from './editstudent/editstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewstudentComponent,
    AddstudentComponent,
    EditstudentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
