import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeDetailService } from '../employee-detail.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{

  userData:FormGroup;
  getData:any;
  public items:any[] = []; 
  
  /* A two-way binding performed which 
     pushes text on division */
  public newTask:any; 

  constructor(private fbuild:FormBuilder,private empService:EmployeeDetailService){
    this.userData=this.fbuild.group({
      id:['',],
      name:['',],
      position:['',],
      email:['',],
      department:['',],
      joining_date:['',]
    })
  }

  ngOnInit(): void {

   this.getData =this.empService.getData();
    
  }

  removeUser(uid:any){

  }

  updateUser(userId:any){

  }

  public userFormData(formData: any){

    if (this.userData == null) { 
    } 
    else { 
       this.items.push(formData); 
        this.newTask = ''; 
    } 
  }

  
  
  
    /* When input is empty, it will 
       not create a new division */
    public addToList() { 
       
    } 
  
    /* This function takes to input the 
       task, that has to be deleted*/
    public deleteTask(index:any) { 

       console.log("Id is",index);
        this.items.splice(index, 1); 
    } 
}
