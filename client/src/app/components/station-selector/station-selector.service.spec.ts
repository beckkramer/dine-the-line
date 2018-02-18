import { TestBed, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Station } from '../../station';
import { StationSelectorService } from './station-selector.service';

describe('StationSelectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        StationSelectorService,
      ]
    });
  });

  it('should be created', inject([StationSelectorService], (service: StationSelectorService) => {
    expect(service).toBeTruthy();
  }));
});
