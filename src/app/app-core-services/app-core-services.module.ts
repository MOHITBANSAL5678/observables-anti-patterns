import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoService } from './student-info.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  providers: [StudentInfoService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class AppCoreServicesModule { }
