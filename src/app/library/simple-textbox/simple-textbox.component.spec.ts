import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTextboxComponent } from './simple-textbox.component';

describe('SimpleTextboxComponent', () => {
  let component: SimpleTextboxComponent;
  let fixture: ComponentFixture<SimpleTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleTextboxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
