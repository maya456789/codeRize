import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeDetailService } from '../employee-detail.service';

@Component({
  selector: 'app-flame-admin-table',
  templateUrl: './flame-admin-table.component.html',
  styleUrls: ['./flame-admin-table.component.css']
})
export class FlameAdminTableComponent implements OnInit{

  getFlameData:any;

  constructor(private empService:EmployeeDetailService,){}

ngOnInit(){

  this.empService.getFlameAdminTable().subscribe((res)=>{
     console.log("Flame data is:",res);
     this.getFlameData=res.data;
  },(err:HttpErrorResponse)=>{
    console.log(err);
  })
}
}
