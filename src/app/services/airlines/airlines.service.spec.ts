import { TestBed } from '@angular/core/testing';

import { AirlinesService } from './airlines.service';

describe('AirlinesService', () => {
  let service: AirlinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirlinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
