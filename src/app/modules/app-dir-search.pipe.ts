import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appDirSearch',
  standalone: true
})
export class AppDirSearchPipe implements PipeTransform {

  transform(items: any, searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter( (item: any) => {
      return item.toLowerCase().includes(searchText);
    });
  }
}
