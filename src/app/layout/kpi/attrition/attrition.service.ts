import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AttritionService {

    constructor(private http: HttpClient) { }
    getBillableConsultants() {
       const uri =  'http://localhost:8080/resmgt/api/billableuser/';
       return this
                .http
                .get(uri)
                .map(res => {
                    return res; });

    }

    getColumns(): number[] {
        return [0, 1]; }

}
