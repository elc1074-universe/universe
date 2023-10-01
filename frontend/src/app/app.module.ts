import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './routes/home/home.component';
import { AppMaterialModule } from './shared/app-material-module/app-material-module.module';
import { UserComponent } from './routes/user/user.component';
import { LoginModule } from './routes/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './routes/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
