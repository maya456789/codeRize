import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafLetDrawComponent } from './leaf-let-draw.component';

describe('LeafLetDrawComponent', () => {
  let component: LeafLetDrawComponent;
  let fixture: ComponentFixture<LeafLetDrawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeafLetDrawComponent]
    });
    fixture = TestBed.createComponent(LeafLetDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
