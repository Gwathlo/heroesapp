import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  term: string = '';
  heroes: Heroe[] = [];
  heroSelected!: Heroe | undefined;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  searching() {
    this.heroesService.getSuggestions(this.term.trim()).subscribe((resp) => {
      if (resp) {
        this.heroes = resp;
      }
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (event.option.value) {
      const hero: Heroe = event.option.value;
      this.term = hero.superhero;

      this.heroesService
        .getHeroById(hero.id!)
        .subscribe((hero) => (this.heroSelected = hero));
    } else {
      this.heroes = [];
      this.heroSelected = undefined;
    }
  }
}
