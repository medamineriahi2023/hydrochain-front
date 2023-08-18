import { TestBed } from '@angular/core/testing';

import { ApplieService } from './applie.service';

describe('ApplieService', () => {
  let service: ApplieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
