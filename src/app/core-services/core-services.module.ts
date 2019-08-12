import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  providers:[DataService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreServicesModule { }
