import { TestBed } from '@angular/core/testing';

import { NgxDomCellService } from './ngx-dom-cell.service';

describe('NgxDomCellService', () => {
  let service: NgxDomCellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDomCellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
