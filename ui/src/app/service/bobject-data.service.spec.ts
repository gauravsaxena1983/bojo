import { TestBed } from '@angular/core/testing';

import { BObjectDataService } from './bobject-data.service';

describe('BObjectDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BObjectDataService = TestBed.get(BObjectDataService);
    expect(service).toBeTruthy();
  });
});
