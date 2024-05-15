import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlameAdminTableComponent } from './flame-admin-table.component';

describe('FlameAdminTableComponent', () => {
  let component: FlameAdminTableComponent;
  let fixture: ComponentFixture<FlameAdminTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlameAdminTableComponent]
    });
    fixture = TestBed.createComponent(FlameAdminTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
