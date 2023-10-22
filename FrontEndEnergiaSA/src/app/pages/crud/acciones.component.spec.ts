import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesComponent } from './acciones.component';

describe('AccionesComponent', () => {
  let component: AccionesComponent;
  let fixture: ComponentFixture<AccionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccionesComponent]
    });
    fixture = TestBed.createComponent(AccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
