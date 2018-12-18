 import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupUser: any = {}
  theActualuser:any = {}
  theError:any

  states: string[] = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 
  'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 
  'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 
  'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 
  'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 
  'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 
  'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 
  'WI', 'WY']

  constructor(private authService: AuthServiceService) { }

  signup(){

    this.authService.signup(this.signupUser)
    .subscribe(
      userObjFromApi =>{this.successCallback(userObjFromApi)},
      blahErrorThing =>{this.errorCallback(blahErrorThing)}
    )
  }

  successCallback(userObject){
    console.log('=-=-=-=-=-=-=-=-=-=-=-',userObject);
    this.theActualuser = userObject
    this.theError = ''
  }

  errorCallback(errorObject){
    this.theError = errorObject
    this.theActualuser = {username: '', password: ''}
  }



  ngOnInit() {
  }

}
