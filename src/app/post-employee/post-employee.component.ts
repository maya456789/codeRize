import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDetailService } from '../employee-detail.service';

@Component({
  selector: 'app-post-employee',
  templateUrl: './post-employee.component.html',
  styleUrls: ['./post-employee.component.css']
})
export class PostEmployeeComponent implements OnInit{

  userData:FormGroup;
  public isSubmitted=false;

  constructor(private fbuild:FormBuilder,private empService:EmployeeDetailService,private route:Router){
    this.userData=this.fbuild.group({
      
      name:['',Validators.compose([Validators.required,])],
      email:['',Validators.compose([Validators.required,Validators.pattern(/^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/)
    ])],
      mobile_no:['',Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]+$")])],
      designation:['',Validators.compose([Validators.required,])],
      
    })
  }

  ngOnInit(): void {
    
  }

  public empFormData(empformData: any){

    this.isSubmitted=true;

    if(this.userData.valid){
    this.empService.postEmployeeData(empformData).subscribe(
      (res)=>{
          console.log(res);
      },
      (err:HttpErrorResponse)=>{
        console.log(err);
      }
    )
    }
  }
}
