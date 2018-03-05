import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
