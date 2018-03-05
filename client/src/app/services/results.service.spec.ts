import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ResultsService } from './results.service';

describe('ResultsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ResultsService
      ]
    });
  });

  it('should be created', inject([ResultsService], (service: ResultsService) => {
    expect(service).toBeTruthy();
  }));
});
