import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { TestComponent } from './routes/test/test.component';
import { PersonalityComponent } from './routes/test/personality/personality.component';
import { AppMaterialModule } from './shared/app-material-module/app-material-module.module';
import { HeaderInterceptor } from './header-interceptor';
import { NoResultComponent } from './routes/test/no-result/no-result.component';
import { StatisticsComponent } from './routes/test/statistics/statistics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './routes/test/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    NoResultComponent,
    StatisticsComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
};
