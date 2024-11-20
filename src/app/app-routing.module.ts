import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  }
  ,{

    path:"addstudent",component:AddstudentComponent
  },
  {
    path:"home", component:ViewstudentComponent
  },
  {
    path:"displaystudent",component:ViewstudentComponent
  },
  {
    path:"editstudent",component:EditstudentComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
