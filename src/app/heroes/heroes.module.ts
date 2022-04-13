import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertComponent } from './pages/insert/insert.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  declarations: [
    InsertComponent,
    SearchComponent,
    HeroComponent,
    HomeComponent,
    ListComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule],
})
export class HeroesModule {}
