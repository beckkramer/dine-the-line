import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockYelpResponse } from '../../mocks/example-yelp-response';
import { ResultDetailComponent } from './result-detail.component';

describe('ResultDetailComponent', () => {
  let component: ResultDetailComponent;
  let fixture: ComponentFixture<ResultDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDetailComponent);
    component = fixture.componentInstance;
    component.result = MockYelpResponse.jsonBody.businesses[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
