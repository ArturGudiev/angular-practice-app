import { TestBed } from '@angular/core/testing';

import { C7Service } from './c7.service';

describe('C7Service', () => {
  let service: C7Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C7Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
