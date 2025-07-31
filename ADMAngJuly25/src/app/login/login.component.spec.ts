import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let mockAuthService: jasmine.SpyObj<AuthService>;
    let mockRouter: jasmine.SpyObj<Router>;

    beforeEach(async () => {
        mockAuthService = jasmine.createSpyObj('AuthService', ['login']);
        mockRouter = jasmine.createSpyObj('Router', ['navigate']);

        await TestBed.configureTestingModule({
            imports: [LoginComponent, ReactiveFormsModule],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: Router, useValue: mockRouter }
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have invalid form when empty', () => {
        expect(component.loginForm.valid).toBeFalsy();
    });

    it('should validate username requirements', () => {
        const usernameControl = component.loginForm.get('username');

        // Test required validation
        expect(usernameControl?.errors?.['required']).toBeTruthy();

        // Test minlength validation
        usernameControl?.setValue('ab');
        expect(usernameControl?.errors?.['minlength']).toBeTruthy();

        // Test valid username
        usernameControl?.setValue('validuser');
        expect(usernameControl?.errors).toBeNull();
    });

    it('should validate password requirements', () => {
        const passwordControl = component.loginForm.get('password');

        // Test required validation
        expect(passwordControl?.errors?.['required']).toBeTruthy();

        // Test minlength validation
        passwordControl?.setValue('12345');
        expect(passwordControl?.errors?.['minlength']).toBeTruthy();

        // Test valid password
        passwordControl?.setValue('validpassword');
        expect(passwordControl?.errors).toBeNull();
    });
});
