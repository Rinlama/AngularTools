import { TestBed } from '@angular/core/testing';

import { RxjsintervalService } from './rxjsinterval.service';

describe('RxjsintervalService', () => {
  let service: RxjsintervalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsintervalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
