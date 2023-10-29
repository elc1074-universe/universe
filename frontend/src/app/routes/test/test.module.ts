import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { TestCreationComponent } from './creation/test-creation.component';
import { TestContinuationComponent } from './continuation/test-continuation.component';
import { TestResultComponent } from './result/test-result.component';
import { TestInfoComponent } from './info/test-info.component';
import { TestRoutingModule } from './test-routing.module';
import { AppMaterialModule } from 'src/app/shared/app-material-module/app-material-module.module';

@NgModule({
  declarations: [
    TestCreationComponent,
    TestContinuationComponent,
    TestResultComponent,
    TestInfoComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    AppMaterialModule,
    FormsModule,
    ToastrModule.forRoot(),
    MatDialogModule
  ],
  providers: [
    ToastrService
  ]
})
export class TestModule {

};
