import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './test.component';
import { TestCreationComponent } from './creation/test-creation.component';
import { TestContinuationComponent } from './continuation/test-continuation.component';
import { TestResultComponent } from './result/test-result.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
  },
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
