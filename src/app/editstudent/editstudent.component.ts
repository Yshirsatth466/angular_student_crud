import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentserviceService } from '../studentservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent {
  constructor(private fb:FormBuilder,private ser:StudentserviceService,public router:Router){}


  studentforms!:FormGroup;

  ngOnInit(): void {
      this.studentforms=this.fb.group({
        id:[],
        name:[],
       email:[],
       contact:[],
       marks:[] 
      })
     
  }



  updatetstudent(){

  }
  
}
