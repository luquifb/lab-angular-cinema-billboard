import { TestBed, inject } from '@angular/core/testing';

import { Cinema } from './cinema.service';

describe('Cinema', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Cinema]
    });
  });

  it('should be created', inject([Cinema], (service: Cinema) => {
    expect(service).toBeTruthy();
  }));
});
