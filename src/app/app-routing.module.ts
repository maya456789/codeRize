import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FlameAdminTableComponent } from './flame-admin-table/flame-admin-table.component';
import { LeafLetDrawComponent } from './leaf-let-draw/leaf-let-draw.component';
import { PostEmployeeComponent } from './post-employee/post-employee.component';


const routes: Routes = [
  {path:'emp',component:EmployeeDetailsComponent},
  {path:'edit-emp/:id',component:EditEmployeeComponent},
  // {path:'',component:LeafLetComponent},
  {path:'leaf-let-draw',component:LeafLetDrawComponent},
  {path:'flame-table',component:FlameAdminTableComponent},
  {path:'post-emp',component:PostEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
