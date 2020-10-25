import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDomCellComponent } from './ngx-dom-cell.component';

describe('NgxDomCellComponent', () => {
  let component: NgxDomCellComponent;
  let fixture: ComponentFixture<NgxDomCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDomCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDomCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
