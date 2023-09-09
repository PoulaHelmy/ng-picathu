import { TestBed } from '@angular/core/testing';

import { NgPicathuService } from './ng-picathu.service';

describe('NgPicathuService', () => {
  let service: NgPicathuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPicathuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
