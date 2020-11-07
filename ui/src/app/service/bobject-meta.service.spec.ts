import { TestBed } from '@angular/core/testing';

import { BObjectMetaService } from './bobject-meta.service';

describe('BObjectMetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BObjectMetaService = TestBed.get(BObjectMetaService);
    expect(service).toBeTruthy();
  });
});
