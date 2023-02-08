import { TestBed } from '@angular/core/testing';

import { C7Service } from './c7.service';
import {C7BookInterface} from "./interfaces_and_constants";

describe('C7Service', () => {
  let testBooks: C7BookInterface[] = [
    {title: 'book0', author: 'author0'},
    {title: 'book1', author: 'author1'},
    {title: 'book2', author: 'author2'},
  ];

  let service: C7Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C7Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
