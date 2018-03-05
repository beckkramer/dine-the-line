import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { StationDetailComponent } from '../station-detail/station-detail.component';
import { StationSelectorComponent } from './station-selector.component';

import { StationService } from '../../services/station.service';

describe('StationSelectorComponent', () => {
  let component: StationSelectorComponent;
  let fixture: ComponentFixture<StationSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StationDetailComponent,
        StationSelectorComponent,
      ],
      imports: [
        HttpClientModule,
      ],
      providers: [
        StationService,
      ]
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
