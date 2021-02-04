import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  // reverse string
  transform = (value: string) => value.split('').reverse().join('');

}
