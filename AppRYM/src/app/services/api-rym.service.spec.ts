import { TestBed } from '@angular/core/testing';

import { ApiRYMService } from './api-rym.service';

describe('ApiRYMService', () => {
  let service: ApiRYMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRYMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
