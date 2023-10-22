import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerdanoComponent } from './leerdano.component';

describe('LeerdanoComponent', () => {
  let component: LeerdanoComponent;
  let fixture: ComponentFixture<LeerdanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeerdanoComponent]
    });
    fixture = TestBed.createComponent(LeerdanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
