import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSetComponent } from './result-set.component';

describe('ResultSetComponent', () => {
  let component: ResultSetComponent;
  let fixture: ComponentFixture<ResultSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultSetComponent ]
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
