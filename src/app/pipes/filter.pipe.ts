import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName:string): any[] {

    const resultArray = [];

    if(value === undefined || filterString === '' || propName ===''){
      return value;
    }
    if (propName === 'price'){
      for (const item of value){
        if (filterString === '1'){
          if(item[propName]<=5){
            resultArray.push(item);
          }
        }else if(filterString === '2'){
          if(item[propName]>5 && item[propName]<=10){
            resultArray.push(item);
          }
        }else if(filterString === '3'){
          if(item[propName]>10 && item[propName]<=20){
            resultArray.push(item);
          }
        }else if(filterString === '4'){
          if(item[propName]>20 && item[propName]<=30){
            resultArray.push(item);
          }
        }else if(filterString === '5'){
          if(item[propName]>30){
            resultArray.push(item);
          }
        }
      }


    }
    for (const item of value){
      if(item[propName] === filterString){
        resultArray.push(item);
      }
    }

    return resultArray;
  }

}
