import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './routes/home/home.component';
import { PersonalityComponent } from './routes/personality/personality.component';
import { StatementComponent } from './routes/statement/statement.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'test',
    loadChildren: () => import('./routes/test/test.module').then(module => module.TestModule)
  },
  {
    path: 'personality',
    component: PersonalityComponent,
  },
  {
    path: 'statement/:id',
    component: StatementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

};
