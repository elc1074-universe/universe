import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './routes/home/home.component';
import { StatementComponent } from './routes/statement/statement.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tests',
    loadChildren: () => import('./routes/test/test.module').then(module => module.TestModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./routes/user/user.module').then(module => module.UserModule)
  },
  {
    path: 'statements/:id',
    component: StatementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

};
