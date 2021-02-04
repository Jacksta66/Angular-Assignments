import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(array: any, order: string, propName: any): any {
    return order === 'asc' ? array.sort((a, b) => (a[propName] < b[propName] ? -1 : 1))
      : array.sort((a, b) => (a[propName] > b[propName] ? -1 : 1));
  }
}
