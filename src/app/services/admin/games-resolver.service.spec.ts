import { TestBed } from '@angular/core/testing';

import { GamesResolverService } from './games-resolver.service';

describe('GamesResolverService', () => {
  let service: GamesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
