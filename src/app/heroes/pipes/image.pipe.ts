import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(hero: Heroe, ...args: unknown[]): string {
    return `assets/heroes/${hero.id}.jpg`;
  }
}
