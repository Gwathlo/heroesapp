import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiEnpoint: string = environment.apiEnpoint;
  private auth: Auth | undefined;

  get getAuth() {
    return { ...this.auth };
  }

  constructor(private http: HttpClient) {}

  verifyAutentication(): Observable<boolean> {
    // verifyAutentication(): Observable<boolean> | boolean {
    // return false
    // return true

    if (!localStorage.getItem('id')) {
      return of(false);
    }

    return this.http
      .get<Auth>(`${this.apiEnpoint}/usuarios/${localStorage.getItem('id')}`)
      .pipe(
        map((auth) => {
          this.auth = auth;
          return true;
        })
      );
  }

  login() {
    return this.http.get<Auth>(`${this.apiEnpoint}/usuarios/1`).pipe(
      tap((auth) => (this.auth = auth)),
      tap((auth) => localStorage.setItem('id', auth.id))
    );
  }

  logout() {
    this.auth = undefined;
    localStorage.removeItem('id');
  }
}
