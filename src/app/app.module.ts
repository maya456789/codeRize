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

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EditEmployeeComponent,
    LeafLetComponent,
    LeafLetDrawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    LeafletModule, LeafletDrawModule
  ],
  providers: [
    EmployeeDetailService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
