import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizardanoComponent } from './actualizardano.component';

describe('ActualizardanoComponent', () => {
  let component: ActualizardanoComponent;
  let fixture: ComponentFixture<ActualizardanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizardanoComponent]
    });
    fixture = TestBed.createComponent(ActualizardanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
