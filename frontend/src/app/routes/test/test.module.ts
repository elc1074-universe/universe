import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { TestComponent } from './test.component';
import { TestCreationComponent } from './creation/test-creation.component';
import { TestContinuationComponent } from './continuation/test-continuation.component';
import { TestResultComponent } from './result/test-result.component';
import { TestRoutingModule } from './test-routing.module';
import { AppMaterialModule } from 'src/app/shared/app-material-module/app-material-module.module';

@NgModule({
  declarations: [
    TestComponent,
    TestCreationComponent,
    TestContinuationComponent,
    TestResultComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    AppMaterialModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    ToastrService
  ]
})
export class TestModule {

};
