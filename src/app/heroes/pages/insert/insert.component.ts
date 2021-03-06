import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
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

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.activatedRoute.params
        .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
        .subscribe((hero) => (this.hero = hero));
    }
  }

  save() {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }
    if (this.hero.id) {
      this.heroesService.updateHero(this.hero).subscribe((resp) => {
        if (resp) {
          this.showSnackbar('Updated');
        }
      });
    } else {
      this.heroesService.addHero(this.hero).subscribe((hero) => {
        this.router.navigate(['/heroes/edit', hero.id]);
        this.showSnackbar('Inserted');
      });
    }
  }

  delete() {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '300px',
      data: { ...this.hero },
    });
    dialog.afterClosed().subscribe((resp) => {
      if (resp) {
        if (this.hero.id) {
          this.heroesService
            .deleteHero(this.hero.id)
            .subscribe((resp) => console.log('Deleted'));
          this.router.navigate(['/heroes']);
        }
      }
    });
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'close', {
      duration: 2500,
    });
  }
}
