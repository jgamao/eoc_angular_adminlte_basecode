import { TestBed, inject } from '@angular/core/testing';

import { LeadsReportService } from './leads-report.service';

describe('LeadsReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeadsReportService]
    });
  });

  it('should be created', inject([LeadsReportService], (service: LeadsReportService) => {
    expect(service).toBeTruthy();
  }));
});
