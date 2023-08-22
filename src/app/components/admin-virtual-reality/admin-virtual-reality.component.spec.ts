import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVirtualRealityComponent } from './admin-virtual-reality.component';

describe('AdminVirtualRealityComponent', () => {
  let component: AdminVirtualRealityComponent;
  let fixture: ComponentFixture<AdminVirtualRealityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminVirtualRealityComponent]
    });
    fixture = TestBed.createComponent(AdminVirtualRealityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
