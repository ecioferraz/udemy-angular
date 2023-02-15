import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  public errorMsg!: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {}

  public submit(): Subscription | void {
    return this.formAuth.valid
      ? this.authService
          .signIn({
            email: this.formAuth.value.email,
            password: this.formAuth.value.password,
          })
          .subscribe({
            next: (res) => res,
            error: (message) => (this.errorMsg = message),
          })
      : undefined;
  }
}
