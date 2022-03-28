import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTextboxExampleComponent } from './simple-textbox-example.component';

describe('SimpleTextboxExampleComponent', () => {
  let component: SimpleTextboxExampleComponent;
  let fixture: ComponentFixture<SimpleTextboxExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleTextboxExampleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTextboxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
