import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestCreationComponent } from './creation/test-creation.component';
import { TestContinuationComponent } from './continuation/test-continuation.component';
import { TestResultComponent } from './result/result.component';
import { StatementComponent } from './statement/statement.component';
import { PersonalityComponent } from './personality/personality.component';
import { CodeResultComponent } from './code-result/code-result.component';
import { StatisticsComponent } from './statistics/statistics.component'

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
    path: 'result/:userCode',
    component: TestResultComponent,
  }, 
  {
    path: 'code-result',
    component: CodeResultComponent,
  },
  {
    path: 'statistics/:userCode',
    component: StatisticsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {

};
