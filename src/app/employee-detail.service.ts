import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {

  url="assets/employee_detail.json";

  constructor(private http:HttpClient) { }

  public getData(){
    // return this.http.get(`https://reqres.in/api/users`).pipe(
    //   map((prod)=>{
    //      return prod;
    //   })
    // )
    return  {"data": [
      {
        "id": "1",
        "email": "george.bluth@reqres.in",
        "name": "George",
        "department": "Bluth",
        "position": "Singer",
        "address": "101,New-Jarshi,America",
        "joining_date": "11-3-1990",
        "maratial_status": "single",
        "hobbies": "Playing football",
        "city": "New Jarshi",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        "id": "2",
        "email": "janet.weaver@reqres.in",
        "name": "Janet",
        "department": "Weaver",
        "position": "Dancer",
        "address": "2333,Texas,America",
        "joining_date": "10-1-1993",
        "maratial_status": "married",
        "hobbies": "Bike riding",
        "city": "Texas",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
        "id": "3",
        "email": "emma.wong@reqres.in",
        "name": "Emma",
        "department": "Wong",
        "position": "Cook",
        "address": "101,Hawai,America",
        "joining_date": "1-3-1991",
        "maratial_status": "single",
        "hobbies": "Badmintan",
        "city": "Hawai",
        "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
        "id": "4",
        "email": "eve.holt@reqres.in",
        "name": "Eve",
        "department": "Holt",
        "position": "Developer",
        "address": "102, City-Side,America",
        "joining_date": "11-4-1969",
        "maratial_status": "married",
        "hobbies": "Reading books",
        "city": "Los Anglies",
        "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
        "id": "5",
        "email": "charles.morris@reqres.in",
        "name": "Charles",
        "department": "Morris",
        "position": "Doctor",
        "address": "101,New-Jarshi,America",
        "joining_date": "4-4-1980",
        "maratial_status": "married",
        "hobbies": "Watching movies",
        "city": "New Jarshi",
        "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
        "id": "6",
        "email": "tracey.ramos@reqres.in",
        "name": "Tracey",
        "department": "Ramos",
        "position": "Engineer",
        "address": "101,New-Jarshi,America",
        "joining_date": "11-3-1990",
        "maratial_status": "single",
        "hobbies": "Playing football",
        "city": "New Jarshi",
        "avatar": "https://reqres.in/img/faces/6-image.jpg"
    },
   
  ],}
      
      
    
  }

  public getEmpData():Observable<any>{
   return this.http.get("http://localhost:3000/employees")// return this.http.get(this.url);
  }

  public getEmpForUpdate(userId:any):Observable<any>{
    return this.http.get(`http://localhost:3000/employees/${userId}`);
  }

  public postEmpData(eData:any):Observable<any>{
    const url2="http://localhost:3000/employees";
    const body= JSON.stringify(eData);

    return this.http.post(url2,body);
  }

  public deleteEmp(eId:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/employees/${eId}`);
  }

  public getFlameAdminTable():Observable<any>{
    return this.http.get(`https://products.coderize.in/api/flame/stac/get_all_stac_items/`);
  }

  public postEmployeeData(empData:any):Observable<any>{
    const url3="https://products.coderize.in/api/geo-visualizer/geofense/post_employee/";
    // const body= JSON.stringify(empData);
    
    return this.http.post(url3,empData);
  }

}
