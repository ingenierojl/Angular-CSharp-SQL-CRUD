import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrardanoComponent } from './borrardano.component';

describe('BorrardanoComponent', () => {
  let component: BorrardanoComponent;
  let fixture: ComponentFixture<BorrardanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrardanoComponent]
    });
    fixture = TestBed.createComponent(BorrardanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
