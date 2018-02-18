import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Station } from '../../station';
import { StationDetailComponent } from './station-detail.component';

describe('StationDetailComponent', () => {
  let component: StationDetailComponent;
  let fixture: ComponentFixture<StationDetailComponent>;
  let testStation = {
    accessible: true,
    name: 'Test Station',
    lines: {
      all: {},
      active: [
        'foo'
      ]
    },
    location: 'foo',
    stop_id: 123,
    map_id: 456,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationDetailComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationDetailComponent);
    component = fixture.componentInstance;
    component.station = testStation;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});

