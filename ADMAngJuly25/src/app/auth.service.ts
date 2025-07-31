import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
    username: string;
    email: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    private currentUserSubject = new BehaviorSubject<User | null>(null);

    public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
    public currentUser$ = this.currentUserSubject.asObservable();

    constructor() {
        // Check if user is already logged in (from localStorage)
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUserSubject.next(JSON.parse(savedUser));
            this.isAuthenticatedSubject.next(true);
        }
    }

    login(username: string, password: string): boolean {
        // Simple authentication logic - in real apps, this would call an API
        if (username && password && password.length >= 6) {
            const user: User = {
                username: username,
                email: `${username}@example.com`
            };

            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            this.isAuthenticatedSubject.next(true);
            return true;
        }
        return false;
    }

    logout(): void {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.isAuthenticatedSubject.next(false);
    }

    isLoggedIn(): boolean {
        return this.isAuthenticatedSubject.value;
    }

    getCurrentUser(): User | null {
        return this.currentUserSubject.value;
    }
}
