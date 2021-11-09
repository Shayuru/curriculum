import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExperienceComponent } from './card-experience.component';

import { DefaultCurriculumInfo } from '../models/default-info';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CardExperienceComponent', () => {
  let component: CardExperienceComponent;
  let fixture: ComponentFixture<CardExperienceComponent>;
  let curriculumInfo: any = DefaultCurriculumInfo;
  let experience: any = curriculumInfo.experience;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [CardExperienceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExperienceComponent);
    component = fixture.componentInstance;
    component.experience = experience;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
