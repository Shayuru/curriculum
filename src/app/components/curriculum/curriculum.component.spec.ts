import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumComponent } from './curriculum.component';

import { CurriculumService } from '../services/curriculum.service';

import { HttpClientModule } from '@angular/common/http';

import { DefaultCurriculumInfo } from '../models/default-info';

import { RouterTestingModule } from '@angular/router/testing';

describe('CurriculumComponent', () => {
  let component: CurriculumComponent;
  let fixture: ComponentFixture<CurriculumComponent>;
  let curriculumServiceSpy: any;
  let curriculumInfo: any = DefaultCurriculumInfo;

  //TODO implement mock service

  beforeEach(async () => {
    /*// Create jasmine spy object
    curriculumServiceSpy = jasmine.createSpyObj(
      'CurriculumService',
      'getCurriculInfo'
    );
    // Provide the dummy/mock data to sortNumberData method.
    curriculumServiceSpy.getCurriculInfo.returnValue([curriculumInfo]);*/
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, [RouterTestingModule]],
      declarations: [CurriculumComponent],
      providers: [CurriculumService],
      /*providers: [
        { provide: CurriculumService, useValue: curriculumServiceSpy },
      ],*/
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumComponent);
    component = fixture.componentInstance;
    component.curriculumInfo = curriculumInfo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
