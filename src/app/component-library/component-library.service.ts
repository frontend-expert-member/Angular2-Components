import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ComponentLibraryServices {

    constructor(private http: Http) {
         let obj;
         this.getJSON().subscribe(data => obj = data, error => console.log(error));
    }

    public getJSON(): Observable<any> {
         return this.http.get('app/component-library/component-library.data.json')
                         .map((res: any) => res.json());

     }
}
