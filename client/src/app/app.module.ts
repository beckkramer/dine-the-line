import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterSetComponent } from './components/filter-set/filter-set.component';
import { StationDetailComponent } from './components/station-detail/station-detail.component';
import { StationFilterComponent } from './components/station-filter/station-filter.component';
import { StationSelectorComponent } from './components/station-selector/station-selector.component';
import { ResultDetailComponent } from './components/result-detail/result-detail.component';
import { ResultSetComponent } from './components/result-set/result-set.component';

import { ResultsService } from './services/results.service';
import { StationService } from './services/station.service';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterSetComponent,
    StationFilterComponent,
    StationSelectorComponent,
    StationDetailComponent,
    ResultSetComponent,
    ResultDetailComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    ResultsService,
    StationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
