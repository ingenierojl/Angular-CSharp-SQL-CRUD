import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreardanoComponent } from './creardano.component';

describe('CreardanoComponent', () => {
  let component: CreardanoComponent;
  let fixture: ComponentFixture<CreardanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreardanoComponent]
    });
    fixture = TestBed.createComponent(CreardanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
