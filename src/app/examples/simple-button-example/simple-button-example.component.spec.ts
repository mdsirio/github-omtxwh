import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleButtonExampleComponent } from './simple-button-example.component';

describe('SimpleButtonExampleComponent', () => {
  let component: SimpleButtonExampleComponent;
  let fixture: ComponentFixture<SimpleButtonExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleButtonExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleButtonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
