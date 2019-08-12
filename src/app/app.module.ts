import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { CoreServicesModule } from './core-services/core-services.module';
import { AppCoreServicesModule } from './app-core-services/app-core-services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StudentModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
