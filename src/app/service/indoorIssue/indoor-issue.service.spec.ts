import { TestBed } from '@angular/core/testing';

import { IndoorIssueService } from './indoor-issue.service';

describe('IndoorIssueService', () => {
  let service: IndoorIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndoorIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
