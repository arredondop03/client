import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { SignupComponent } from './signup/signup.component';


const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent }
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
