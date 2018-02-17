import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSetComponent } from './filter-set.component';

describe('FilterSetComponent', () => {
  let component: FilterSetComponent;
  let fixture: ComponentFixture<FilterSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
