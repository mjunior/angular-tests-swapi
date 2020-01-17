import { TestBed } from '@angular/core/testing';

import { PeoplesListService } from './peoples-list.service';

describe('PeoplesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeoplesListService = TestBed.get(PeoplesListService);
    expect(service).toBeTruthy();
  });
});
