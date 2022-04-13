import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { InsertComponent } from './pages/insert/insert.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'add',
        component: InsertComponent,
      },
      {
        path: 'edit/:id',
        component: InsertComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: ':id',
        component: HeroComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
