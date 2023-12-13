import { TestBed } from '@angular/core/testing';

import { FetchPictureService } from './fetch-picture.service';

describe('FetchPictureService', () => {
  let service: FetchPictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchPictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
