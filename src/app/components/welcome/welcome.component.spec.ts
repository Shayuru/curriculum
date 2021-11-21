import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';

import { CurriculumService } from '../../services/curriculum.service';

import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  //TODO implement mock service

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
      declarations: [WelcomeComponent],
      providers: [CurriculumService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
