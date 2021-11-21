import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { ContactComponent } from './components/contact/contact.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CurriculumFooterComponent } from './components/curriculum-footer/curriculum-footer.component';
import { CardExperienceComponent } from './components/card-experience/card-experience.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FloatingTopComponent } from './components/floating-top/floating-top.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locales/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    CurriculumComponent,
    CardInfoComponent,
    CardListComponent,
    ContactComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    CurriculumFooterComponent,
    CardExperienceComponent,
    NavBarComponent,
    FloatingTopComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }
}
