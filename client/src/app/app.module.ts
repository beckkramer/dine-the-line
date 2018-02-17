import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterSetComponent } from './components/filter-set/filter-set.component';
import { StationSelectorComponent } from './components/station-selector/station-selector.component';
import { StationDetailComponent } from './components/station-detail/station-detail.component';
import { ResultSetComponent } from './components/result-set/result-set.component';
import { ResultDetailComponent } from './components/result-detail/result-detail.component';
import { StationSelectorService } from './components/station-selector/station-selector.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterSetComponent,
    StationSelectorComponent,
    StationDetailComponent,
    ResultSetComponent,
    ResultDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    StationSelectorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
