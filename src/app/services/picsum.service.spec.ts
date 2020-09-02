import { TestBed } from '@angular/core/testing';

import { PicsumService } from './picsum.service';

describe('PicsumService', () => {
  let service: PicsumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicsumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
