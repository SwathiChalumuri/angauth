import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegviewdetailsComponent } from './regviewdetails.component';

describe('RegviewdetailsComponent', () => {
  let component: RegviewdetailsComponent;
  let fixture: ComponentFixture<RegviewdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegviewdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegviewdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
