import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AttritionService } from './attrition.service';

@Component({
    selector: 'app-attrition',
    templateUrl: './attrition.component.html',
    styleUrls: ['./attrition.component.scss'],
    animations: [routerTransition()]
})
export class AttritionComponent implements OnInit {

    constructor(private service: AttritionService) { }

    billableUsers: any;
    columns: number[];

    ngOnInit() {
        this.getBillableList()
        this.columns = this.service.getColumns();
    }

    getBillableList() {
        this.service.getBillableConsultants().subscribe(res => {
            this.billableUsers = res;
        });

    }

    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018'
    ];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [7, 17, 14, 20, 14, 12, 0], label: 'Attrition %' }

    ];

  }
