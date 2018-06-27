import {Injectable, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {ChartData} from '../../shared/chartData';


@Injectable()
export class DashboardService {

    constructor (private http: HttpClient) {}
    getAllChartData(): Observable<ChartData[]> {
        const uri = 'http://localhost:8080/resmgt/api/attrition/';
        return this
            .http
            .get(uri)
            .map(res => {
                return res as ChartData[];
            });
    }

    getLocationWiseCount()  {
        const uri = 'http://localhost:8080/resmgt/api/locationwiseuser/';
        return this
            .http
            .get(uri)
            .map(res => {
                return res;
            });
    }

    getProjectTypeBillCount() {
        const uri = 'http://localhost:8080/resmgt/api/projbillcount/';
        return this
            .http
            .get(uri)
            .map(res => {
                return res;
            });
    }

/*    getWomenEmp() {
        const uri = 'http://localhost:8080/resmgt/api/gender/' ;
        return this
            .http
            .get(uri)
            .map(res => {
                return res;
            });
    }*/
}
