import { TestBed, inject } from '@angular/core/testing';

import { StationSelectorService } from './station-selector.service';

describe('StationSelectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StationSelectorService]
    });
  });

  it('should be created', inject([StationSelectorService], (service: StationSelectorService) => {
    expect(service).toBeTruthy();
  }));
});
