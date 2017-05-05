import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'dlFilter',
    pure : false
})

export class Filter implements PipeTransform {
    transform(data1: Array<any>, filterBy: any): Array<any> {
    if (data1 && filterBy) {
        return filterBy ? data1.filter (data => data.name.toUpperCase().indexOf(filterBy.toUpperCase()) !== -1) : data1;
    } else {
        return data1;
    }
}
}
