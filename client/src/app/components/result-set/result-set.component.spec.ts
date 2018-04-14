import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MockYelpResponse } from '../../mocks/example-yelp-response';
import { ResultDetailComponent } from '../result-detail/result-detail.component';
import { ResultSetComponent } from './result-set.component';
import { ResultsService } from '../../services/results.service';

describe('ResultSetComponent', () => {
  let component: ResultSetComponent;
  let fixture: ComponentFixture<ResultSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResultDetailComponent,
        ResultSetComponent
      ],
      providers: [
        ResultsService
      ],
      imports: [
        HttpClientTestingModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSetComponent);
    component = fixture.componentInstance;
    component.station = {
      accessible: true,
      name: '95th/Ran Ryan',
      lines: {
        all: {
          blue: false,
          brown: false,
          green: false,
          orange: false,
          pink: false,
          purple: false,
          red: true,
          yellow: false
        },
        active: [
          'red',
        ]
      },
      location: '41.722377,-87.624342',
      stop_id: 30088,
      map_id: 40450,
    };
    component.results = MockYelpResponse.jsonBody.businesses;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
