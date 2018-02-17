import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationSelectorComponent } from './station-selector.component';

describe('StationSelectorComponent', () => {
  let component: StationSelectorComponent;
  let fixture: ComponentFixture<StationSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
