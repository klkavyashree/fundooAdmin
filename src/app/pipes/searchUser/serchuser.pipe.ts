import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serchuser'
})
export class SerchuserPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args)return value;
 
    return value.filter(array=>
      array.firstName.toLowerCase().indexOf(args.toLowerCase()) !==-1)
  }

}
