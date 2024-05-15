import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LeafLetDrawComponent } from './leaf-let-draw/leaf-let-draw.component';
import { LeafLetComponent } from './leaf-let/leaf-let.component';

const routes: Routes = [
  {path:'emp',component:EmployeeDetailsComponent},
  {path:'edit-emp/:id',component:EditEmployeeComponent},
  {path:'',component:LeafLetComponent},
  {path:'leaf-let-draw',component:LeafLetDrawComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
