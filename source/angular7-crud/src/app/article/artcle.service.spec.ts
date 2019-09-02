import { TestBed } from '@angular/core/testing';

import { ArtcleService } from './artcle.service';

describe('ArtcleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtcleService = TestBed.get(ArtcleService);
    expect(service).toBeTruthy();
  });
});
