import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExperienceComponent } from './card-experience.component';

import { DefaultCurriculumInfoEnglish } from '../../models/default-info-en-US';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateModule } from '@ngx-translate/core';

describe('CardExperienceComponent', () => {
  let component: CardExperienceComponent;
  let fixture: ComponentFixture<CardExperienceComponent>;
  let curriculumInfo: any = DefaultCurriculumInfoEnglish;
  let experience: any = curriculumInfo.experience;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, TranslateModule.forRoot()],
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
