import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: any, order: string, propName: any): any {
    if (order === 'asc') {
      return array.sort((a, b) => (a[propName] < b[propName] ? -1 : 1));
    } else if (order === 'desc') {
      return array.sort((a, b) => (a[propName] > b[propName] ? -1 : 1));
    }
  }
}
