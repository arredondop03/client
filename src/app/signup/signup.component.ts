import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupUser: any = {}

  constructor(private authService: AuthServiceService) { }

  signup(){
    this.authService.login(this.signupUser)
    .subscribe
  }



  ngOnInit() {
  }

}
