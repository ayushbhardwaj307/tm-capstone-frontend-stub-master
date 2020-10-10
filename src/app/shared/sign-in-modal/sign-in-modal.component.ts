import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss']
})
export class SignInModalComponent implements OnInit {

  submitted = false;
  signInForm: FormGroup;
  userName: FormControl;
  password:FormControl;

  signUpForm:FormGroup;
  form:FormControl;
  firstName:FormControl;
  lastName:FormControl;
  email1:FormControl;
  mobileNumber:FormControl;
  UserName:FormControl;
  password1:FormControl;
  password2:FormControl;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.userName = new FormControl('', [Validators.required]);
    this.password = new FormControl('' , [Validators.required , Validators.minLength(6)]);

    this.signInForm = this.formBuilder.group({
      password: this.password,
      userName: this.userName
    });

    this.firstName = new FormControl('',[Validators.required , Validators.minLength(3)]);
    this.lastName = new FormControl('',[Validators.required , Validators.minLength(3)]);
    this.email1 = new FormControl('', [Validators.required , Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]);
    this.mobileNumber = new FormControl('',[Validators.required , Validators.pattern(/^[1-9]{1}[0-9]{9}$/)]);
    this.UserName = new FormControl('',[Validators.required , Validators.minLength(6)]);
    this.password1 = new FormControl('', [Validators.required , Validators.minLength(6)]);
    this.password2 = new FormControl('', [Validators.required ]) ;
    this.signUpForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email1: this.email1,
      mobileNumber: this.mobileNumber,
      UserName: this.UserName,
      password1: this.password1,
      password2: this.password2
    });
  }

  submitForm() {
    if (this.signInForm.valid) {
      this.submitted = true;
    }
  }
}
