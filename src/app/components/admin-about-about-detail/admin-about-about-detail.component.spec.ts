import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAboutAboutDetailComponent } from './admin-about-about-detail.component';

describe('AdminAboutAboutDetailComponent', () => {
  let component: AdminAboutAboutDetailComponent;
  let fixture: ComponentFixture<AdminAboutAboutDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAboutAboutDetailComponent]
    });
    fixture = TestBed.createComponent(AdminAboutAboutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
