import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>, args: any[]): any {
    const sortField = args[0];
    const sortDirection = args[1];

    let sortdir = 1;

    if (sortDirection === 'desc'){
      sortdir = -1;
    }
    if (value === undefined){
      return value
    }
    value.sort((a: any, b:any)=>{
      if (a[sortField]<b[sortField]){
        return -1 * sortdir
      }else if (a[sortField]>b[sortField]){
        return 1 * sortdir
      }else{
        return 0
      }
    });

    return value;
  }

}
