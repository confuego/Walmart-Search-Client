import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length: number = 50): any {
    if (typeof value === 'string') {
      return value.length > length ? value.slice(0, length) + '...' : value;
    }
    return '';
  }

}
