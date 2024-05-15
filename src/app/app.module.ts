import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailService } from './employee-detail.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { LeafLetComponent } from './leaf-let/leaf-let.component';
import { LeafLetDrawComponent } from './leaf-let-draw/leaf-let-draw.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';
import { FlameAdminTableComponent } from './flame-admin-table/flame-admin-table.component';
import { PostEmployeeComponent } from './post-employee/post-employee.component';
import { ChartsComponent } from './charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EditEmployeeComponent,
    LeafLetComponent,
    LeafLetDrawComponent,
    FlameAdminTableComponent,
    PostEmployeeComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    LeafletModule, LeafletDrawModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgApexchartsModule
  ],
  providers: [
    EmployeeDetailService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
