import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styles: [],
})
export class InsertComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel Comics',
    },
  ];

  hero: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.MarvelComics,
    alt_img: '',
  };

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  save() {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }
    this.heroesService.addHero(this.hero).subscribe((resp) => {
      if (resp) {
        console.log(resp);
      }
    });
  }
}
