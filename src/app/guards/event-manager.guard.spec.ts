import { TestBed } from '@angular/core/testing';

import { EventManagerGuard } from './event-manager.guard';

describe('EventManagerGuard', () => {
  let guard: EventManagerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EventManagerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
