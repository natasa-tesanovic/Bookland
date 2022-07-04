import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 100){
      return value.substr(0, 120) + '...';
    }
    return value;
  }

}
