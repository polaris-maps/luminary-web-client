import { TestBed } from '@angular/core/testing';

import { OutdoorIssueService } from './outdoor-issue.service';

describe('OutdoorIssueService', () => {
  let service: OutdoorIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutdoorIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
