import { TestBed } from '@angular/core/testing';

import { ProvidedataService } from './providedata.service';

describe('ProvidedataService', () => {
  let service: ProvidedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvidedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
