import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { UserComponent } from './routes/user/user.component';
import { QuestionComponent } from './routes/question/question.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./routes/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'user', 
    loadChildren: () => import('./routes/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'question/:id', 
    component: QuestionComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
