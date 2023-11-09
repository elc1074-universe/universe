import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestCreationComponent } from './creation/test-creation.component';
import { TestContinuationComponent } from './continuation/test-continuation.component';
import { TestResultComponent } from './result/result.component';
import { StatementComponent } from './statement/statement.component';
import { PersonalityComponent } from './personality/personality.component';

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
    path: 'personality/:userCode',
    component: PersonalityComponent,
  },
  {
    path: 'statement/:id',
    component: StatementComponent,
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
