import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatToolbarModule, ErrorStateMatcher } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroupDirective, NgForm, FormControl, Validators } from '@angular/forms';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  private email: string;
  private password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }


  login(): void {
    if (this.email === 'admin@admin.com' && this.password === 'admin'){
     this.router.navigate(['dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
