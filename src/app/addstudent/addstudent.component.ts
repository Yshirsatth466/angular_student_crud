import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormBuilder  } from '@angular/forms';
import { StudentserviceService } from '../studentservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit{
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
   nullchecker(formGroup: FormGroup): boolean {
    const formValues = formGroup.value;
    
    return Object.values(formValues).every(value => value === null);
  }
  savestudent(){
         if(this.nullchecker(this.studentforms)===true){
          alert("please fill all fields")
         }else{
          this.ser.addstudent(this.studentforms.value).subscribe()
          alert("student add successfully")
          this.router.navigateByUrl("displaystudent")
          console.log(this.studentforms.value)
         
         }
       
      
        

 
}
notfication(){
  alert("student add succesfully")
}
}
