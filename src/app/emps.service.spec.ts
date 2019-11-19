import { TestBed } from '@angular/core/testing';

import { EmpsService } from './emps.service';

describe('EmpsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpsService = TestBed.get(EmpsService);
    expect(service).toBeTruthy();
  });
});
