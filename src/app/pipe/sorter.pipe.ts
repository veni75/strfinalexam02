import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[]|null, columnKey:string): any[]|null {
    if (!Array.isArray(value) || !columnKey) {
      return value;
    }

    return value.sort(function (a: any, b: any): any {      
        return ('' + a[columnKey]).toLowerCase().localeCompare(('' + b[columnKey]).toLowerCase());
      
    }
    )
  }

}
