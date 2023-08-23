import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggerPageComponent } from './blogger-page.component';

describe('BloggerPageComponent', () => {
  let component: BloggerPageComponent;
  let fixture: ComponentFixture<BloggerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloggerPageComponent]
    });
    fixture = TestBed.createComponent(BloggerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
