import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

import { DefaultCurriculumInfo } from '../models/default-info';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let curriculumInfo: any = DefaultCurriculumInfo;
  let cardTitle: any = 'Contact';
  let iconName: any = 'phone';
  let contactInfo: any = curriculumInfo.contact;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    component.cardTitle = cardTitle;
    component.iconName = iconName;
    component.contactInfo = contactInfo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
