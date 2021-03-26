import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[] | null, phrase: string, key: string = 'title'): any[] | null {
    if (!Array.isArray(value) || !phrase) {
      return value;
    }
    phrase = phrase.toLowerCase();
    return value.filter(item => item[key].toString().toLowerCase().includes(phrase));

  }

}
