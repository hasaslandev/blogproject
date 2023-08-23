import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggerCategoryComponent } from './blogger-category.component';

describe('BloggerCategoryComponent', () => {
  let component: BloggerCategoryComponent;
  let fixture: ComponentFixture<BloggerCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloggerCategoryComponent]
    });
    fixture = TestBed.createComponent(BloggerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
