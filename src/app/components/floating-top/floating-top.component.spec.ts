import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingTopComponent } from './floating-top.component';

describe('FloatingTopComponent', () => {
  let component: FloatingTopComponent;
  let fixture: ComponentFixture<FloatingTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
