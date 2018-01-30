import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PracticeQuestionComponent } from './practice-question/practice-question.component';
import { PutQuestionComponent } from './put-question/put-question.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {"path": '', "component": HomeComponent},
    {"path": 'getQuestion', "component": PracticeQuestionComponent},
    {"path": 'postQuestion', "component": PutQuestionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PracticeQuestionComponent,
    PutQuestionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) // Declare usage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'Simple Page';
}
