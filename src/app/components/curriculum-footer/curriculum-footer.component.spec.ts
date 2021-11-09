import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumFooterComponent } from './curriculum-footer.component';

describe('CurriculumFooterComponent', () => {
  let component: CurriculumFooterComponent;
  let fixture: ComponentFixture<CurriculumFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
