import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user/user.service'
import { MatSnackBar } from '@angular/material';
import { login } from '../../model/login'
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  model: any;
  response: any;
  message = '';
  


  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({//creating instance of formbuilder class
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }
  get f() { return this.loginForm.controls; }

  login() {
    this.model = {
      "email": this.loginForm.get('email').value,
      "password": this.loginForm.get('password').value
    }

    // stop here if form is invalid
    try{
    if (this.loginForm.invalid) {
      return;
    }
    else {
      this.userService.login(this.model).subscribe(data => {
        console.log("data", data);
        this.response = data;
        localStorage.setItem('token', this.response.id);
        var token = localStorage.getItem('token')
        console.log('token:',token)
        this.router.navigate(['dashboard']);
        this.snackbar.open('loggin successful','close',{
          duration:1500
        })
      }, err => {
        console.log(err)
        this.snackbar.open('user not found','close',{
          duration:1500
        })
      });

    }}catch(err){
      console.log('error found')
    }

  }
}
