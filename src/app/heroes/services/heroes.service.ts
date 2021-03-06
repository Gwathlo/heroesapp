import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private apiEnpoint = environment.apiEnpoint;

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.apiEnpoint}/heroes`);
  }

  getHeroById(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.apiEnpoint}/heroes/${id}`);
  }

  getSuggestions(term: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(
      `${this.apiEnpoint}/heroes?q=${term}&_limit=6`
    );
  }

  addHero(hero: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${this.apiEnpoint}/heroes`, hero);
  }

  updateHero(hero: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${this.apiEnpoint}/heroes/${hero.id}`, hero);
  }

  deleteHero(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiEnpoint}/heroes/${id}`);
  }
}
