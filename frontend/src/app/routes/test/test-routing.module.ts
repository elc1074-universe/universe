import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestCreationComponent } from './creation/test-creation.component';
import { TestContinuationComponent } from './continuation/test-continuation.component';
import { TestResultComponent } from './result/test-result.component';

const routes: Routes = [
  {
    path: 'new',
    component: TestCreationComponent,
  },
  {
    path: 'continue',
    component: TestContinuationComponent,
  },
  {
    path: 'result',
    component: TestResultComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {

};
