import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
    confirmPassword: new FormControl('', [Validators.minLength(6), Validators.required]),
    country: new FormControl(''),
    age: new FormControl('', Validators.min(18)),
    gender: new FormControl(''),
    phone: new FormControl('', Validators.pattern('^\\+84\\d{9,10}$')),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
