import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    loginForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(3)]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    loginError = '';
    isLoading = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    get username() {
        return this.loginForm.get('username')?.value || '';
    }

    get password() {
        return this.loginForm.get('password')?.value || '';
    }

    get isUsernameInvalid() {
        const usernameControl = this.loginForm.get('username');
        return usernameControl?.invalid && usernameControl?.touched;
    }

    get isPasswordInvalid() {
        const passwordControl = this.loginForm.get('password');
        return passwordControl?.invalid && passwordControl?.touched;
    }

    onSubmit() {
        if (this.loginForm.valid) {
            this.isLoading = true;
            this.loginError = '';

            // Simulate API call delay
            setTimeout(() => {
                const success = this.authService.login(this.username, this.password);

                if (success) {
                    this.router.navigate(['/bios']);
                } else {
                    this.loginError = 'Invalid username or password. Please try again.';
                }

                this.isLoading = false;
            }, 1000);
        } else {
            // Mark all fields as touched to show validation errors
            this.loginForm.markAllAsTouched();
        }
    }

    clearError() {
        this.loginError = '';
    }
}
