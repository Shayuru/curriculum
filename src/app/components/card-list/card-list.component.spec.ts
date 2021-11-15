import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent } from './card-list.component';

import { DefaultCurriculumInfo } from '../../models/default-info';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;
  let curriculumInfo: any = DefaultCurriculumInfo;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    component.curriculumInfo = curriculumInfo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
