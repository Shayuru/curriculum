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
import { HttpClientModule } from '@angular/common/http';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CurriculumFooterComponent } from './components/curriculum-footer/curriculum-footer.component';
import { CardExperienceComponent } from './components/card-experience/card-experience.component';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }
}
