import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoComponent } from './student-info/student-info.component';
import { AppCoreServicesModule } from '../app-core-services/app-core-services.module';
import { StudentInfoService } from '../app-core-services/student-info.service';
import { CoreServicesModule } from '../core-services/core-services.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentInfoComponent],
  imports: [
    CommonModule,
    AppCoreServicesModule,
    FormsModule,
    CoreServicesModule
  ],
  exports: [CommonModule,StudentInfoComponent],
  providers: [],
})
export class StudentModule { }
