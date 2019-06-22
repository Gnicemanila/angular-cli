import { TestBed } from '@angular/core/testing';

import { NiceService } from './nice.service';

describe('NiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NiceService = TestBed.get(NiceService);
    expect(service).toBeTruthy();
  });
});
