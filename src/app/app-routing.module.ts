import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { SignupComponent } from './signup/signup.component';


const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent }
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }



// exports: [ RouterModule ], imports: [ RouterModule.forChild(appRoutes) ]