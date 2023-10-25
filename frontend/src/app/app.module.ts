import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './routes/home/home.component';
import { AppMaterialModule } from './shared/app-material-module/app-material-module.module';
import { LoginModule } from './routes/login/login.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './header-interceptor';
import { StatementComponent } from './routes/statement/statement.component';
import { UserModule } from './routes/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
