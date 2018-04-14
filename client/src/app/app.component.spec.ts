import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FilterSetComponent } from './components/filter-set/filter-set.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ResultDetailComponent } from './components/result-detail/result-detail.component';
import { ResultSetComponent } from './components/result-set/result-set.component';
import { StationDetailComponent } from './components/station-detail/station-detail.component';
import { StationFilterComponent } from './components/station-filter/station-filter.component';
import { StationSelectorComponent } from './components/station-selector/station-selector.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StationService } from './services/station.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FilterSetComponent,
        FooterComponent,
        HeaderComponent,
        ResultDetailComponent,
        ResultSetComponent,
        StationDetailComponent,
        StationFilterComponent,
        StationSelectorComponent,
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
      ],
      providers: [
        StationService,
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
