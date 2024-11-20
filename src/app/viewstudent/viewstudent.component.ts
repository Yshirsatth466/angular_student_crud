import { Component } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent {
        students:any
        
        constructor(public Studentservice:StudentserviceService,public router:Router){
             Studentservice.displayAll().subscribe((data:any)=>{
              this.students=data
             
             }
             
            )

        }
        ngOnInit(): void{
          
        }
        removestudent(stuid:number){
          if(confirm("do you want to delete this data:")){
            this.Studentservice.deletestudent(stuid).subscribe()
            this.router.navigateByUrl("displaystudent")
           
            
             console.log("student deleted:"+stuid)
            

          }
          

        }
        Editstudent(sid:any){
          localStorage.setItem("stuid",sid);
          this.router.navigateByUrl("editstudent")
            
        }
}
