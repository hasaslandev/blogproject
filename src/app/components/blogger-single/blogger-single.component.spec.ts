import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggerSingleComponent } from './blogger-single.component';

describe('BloggerSingleComponent', () => {
  let component: BloggerSingleComponent;
  let fixture: ComponentFixture<BloggerSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloggerSingleComponent]
    });
    fixture = TestBed.createComponent(BloggerSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
