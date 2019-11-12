import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TwoCallsComponent } from './two-calls/two-calls.component';
import { CoreServicesModule } from './core-services/core-services.module';
import { ShareComponent } from './share/share.component';
import { LatestFilterComponent } from './latest-filter/latest-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TwoCallsComponent,
    ShareComponent,
    LatestFilterComponent
  ],
  imports: [CoreServicesModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
