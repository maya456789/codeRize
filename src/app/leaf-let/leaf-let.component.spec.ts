import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafLetComponent } from './leaf-let.component';

describe('LeafLetComponent', () => {
  let component: LeafLetComponent;
  let fixture: ComponentFixture<LeafLetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeafLetComponent]
    });
    fixture = TestBed.createComponent(LeafLetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
