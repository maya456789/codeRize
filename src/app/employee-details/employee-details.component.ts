import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private fbuild:FormBuilder,private empService:EmployeeDetailService,private route:Router){
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

   this.empService.getEmpData().subscribe(res=>{
    this.getData = res;
   });
    
  }

  reloadPage(){
    window.location.reload()
  }

  removeUser(uid:any){
    this.empService.deleteEmp(uid).subscribe(res=>{
      console.log("Delete emp response :",res.status);
      this.reloadPage();
    },err=>{
      console.log(err);
    })
  }

  updateUser(userId:any){
    this.route.navigate([`edit-emp/${userId}`]);
  }

  public userFormData(formData: any){

    this.empService.postEmpData(formData).subscribe(res=>{
      console.log("Post res",res);
      this.reloadPage();
    },err=>{
      console.log("Err resp",err);
    })
   

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
       let i=this.items.findIndex(function(element){
        return element.id==index;
       })
        this.items.splice(i, 1); 
    } 
}
