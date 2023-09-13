import { TestBed } from '@angular/core/testing';

import { AboutImageService } from './about-image.service';

describe('AboutImageService', () => {
  let service: AboutImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
