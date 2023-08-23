import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggerIndexComponent } from './blogger-index.component';

describe('BloggerIndexComponent', () => {
  let component: BloggerIndexComponent;
  let fixture: ComponentFixture<BloggerIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloggerIndexComponent]
    });
    fixture = TestBed.createComponent(BloggerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
