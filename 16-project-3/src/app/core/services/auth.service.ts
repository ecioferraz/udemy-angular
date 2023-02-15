import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient, private router: Router) {}

  public signIn(userData: {
    email: string;
    password: string;
  }): Observable<any> {
    return this.httpClient
      .post<{ token: string }>(`${this.baseUrl}/sign`, userData)
      .pipe(
        map(({ token }) => {
          localStorage.removeItem('token');
          localStorage.setItem('token', token);
          return this.router.navigate(['admin']);
        }),
        catchError(({ error: { message } }) =>
          message
            ? throwError(() => message)
            : throwError(
                () =>
                  'Parece que nosso servidor caiu! :( Tente novamente mais tarde.',
              ),
        ),
      );
  }

  public logout() {
    localStorage.removeItem('token');
    return this.router.navigate(['']);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    const jwtHelper = new JwtHelperService();

    return !jwtHelper.isTokenExpired(token);
  }
}
