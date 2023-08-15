import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenemeTemplateComponent } from './deneme-template.component';

describe('DenemeTemplateComponent', () => {
  let component: DenemeTemplateComponent;
  let fixture: ComponentFixture<DenemeTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DenemeTemplateComponent]
    });
    fixture = TestBed.createComponent(DenemeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
