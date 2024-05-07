import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetailService } from '../employee-detail.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

 emp:any;

  userData=this.fbuild.group({
    id:['',],
    name:['',],
    position:['',],
    email:['',],
    department:['',],
    joining_date:['',]
  })

  constructor(private aroute: ActivatedRoute,private fbuild:FormBuilder,private empService:EmployeeDetailService,private http:HttpClient,private route:Router){}

  ngOnInit(): void {
    const id = this.aroute.snapshot.paramMap.get('id');
    
    console.log("Id for Update is:-",id);

    this.empService.getEmpForUpdate(id).subscribe(
      res=>
      { 
        this.emp=res;
        this.userData.setValue({
          id:`${this.emp.id}`,
          name:`${this.emp.name}`,
          position:`${this.emp.position}`,
          email:`${this.emp.email}`,
          department:`${this.emp.department}`,
          joining_date:`${this.emp.joining_date}`,
        })
      }
    )
  }

  onSubmit(updateClient:any){

    this.http.put<any>(`http://localhost:3000/products`+'/'+updateClient.value.id,updateClient.value, {observe: 'response'}).subscribe(res => {
      console.log('Update status:', res.status);
      console.log('Update Body:', res.body);
      this.route.navigate(["/"]);
     
    },err=>{
       console.log(err);
    });
  }
  
}
