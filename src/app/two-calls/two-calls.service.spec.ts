import { TestBed } from '@angular/core/testing';

import { TwoCallsService } from './two-calls.service';

describe('TwoCallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwoCallsService = TestBed.get(TwoCallsService);
    expect(service).toBeTruthy();
  });
});
