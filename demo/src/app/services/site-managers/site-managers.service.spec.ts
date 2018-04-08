import { TestBed, inject } from '@angular/core/testing';

import { SiteManagersService } from './site-managers.service';

describe('SiteManagersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteManagersService]
    });
  });

  it('should be created', inject([SiteManagersService], (service: SiteManagersService) => {
    expect(service).toBeTruthy();
  }));
});
