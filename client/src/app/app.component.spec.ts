import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FilterSetComponent } from './components/filter-set/filter-set.component';
import { HeaderComponent } from './components/header/header.component';
import { ResultDetailComponent } from './components/result-detail/result-detail.component';
import { ResultSetComponent } from './components/result-set/result-set.component';
import { StationDetailComponent } from './components/station-detail/station-detail.component';
import { StationSelectorComponent } from './components/station-selector/station-selector.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StationService } from './services/station.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FilterSetComponent,
        HeaderComponent,
        ResultDetailComponent,
        ResultSetComponent,
        StationDetailComponent,
        StationSelectorComponent,
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
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
