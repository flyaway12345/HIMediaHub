import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPoints',
  standalone: true
})
export class OrderByPointsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
