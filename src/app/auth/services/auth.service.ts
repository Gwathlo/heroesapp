import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

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

  login() {
    return this.http
      .get<Auth>(`${this.apiEnpoint}/usuarios/1`)
      .pipe(tap((auth) => (this.auth = auth)));
  }

  logout() {
    this.auth = undefined;
  }
}
