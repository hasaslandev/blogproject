import { Pipe, PipeTransform } from '@angular/core';
import { Blog } from '../Models/blog';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Blog[], filterText: string): Blog[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : ""
    return filterText ? value.filter((p: Blog) => p.blogTitle.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
