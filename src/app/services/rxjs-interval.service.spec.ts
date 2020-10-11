import { TestBed } from '@angular/core/testing';

import { RxjsIntervalService } from './rxjs-interval.service';

describe('RxjsIntervalService', () => {
  let service: RxjsIntervalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsIntervalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
