import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { UserComponent }   from './user/user.component';
import { SignupComponent } from './signup/signup.component';


const appRoutes: Routes = [

  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserComponent }
]


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
