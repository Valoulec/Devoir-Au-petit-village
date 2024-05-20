import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: true,
})
export class SortByPricePipe implements PipeTransform {
  transform(array: any[], args: string): any[] {
    if (args === 'asc') {
      return array.sort((a, b) => a.price - b.price);
    } else if (args === 'desc') {
      return array.sort((a, b) => b.price - a.price);
    } else {
      return array;
    }
  }
}
