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
