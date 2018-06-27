import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DashboardService } from './dashboard.service';
import { ChartData } from '../../shared/chartData';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    chartData: ChartData[];
    doughnutData: any;
    pieData: any;
    pullUsers: any;
    closeResult: string;

    public barChartLabels: string[] = [];
    public barChartData: any[] = [];

   public doughnutChartData: number[] = [];
    public doughnutChartLabels: string[] = [];

    public pieChartLabels: string[] = [];
    public pieChartData: number[] = [];

    public gender = '';
    public count = 0 ;


    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };

    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }



    public barChartOptions1: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels1: string[] = ['2008', '2009', '2010', '2011', '2012'];
    public barChartType1: string = 'bar';
    public barChartLegend1: boolean = true;

    public barChartData1: any[] = [
        { data: [5.4, 6, 5.9, 5.23, 4.91], label: 'Without buffer' },
        { data: [6.2, 7.1, 6.9, 6.26, 5.93], label: 'With buffer' }
    ];

    public doughnutChartType: string = 'doughnut';

    public pieChartType: string = 'pie';

    /*// Radar
    public radarChartLabels: string[] = [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
    ];
    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    public radarChartType: string = 'radar';*/

    // Pie
/*    public pieChartLabels: string[] = [
        'IT',
        'Service Delivery',
        'QA',
        'Support'
    ];
    public pieChartData: number[] = [185, 1, 35, 45];*/


    /*// PolarArea
    public polarAreaChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales',
        'Telesales',
        'Corporate Sales'
    ];
    public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend: boolean = true;

    public polarAreaChartType: string = 'polarArea';

    // lineChart
    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    ];
    public lineChartLabels: Array<any> = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';*/

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        const data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }

    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor(private modalService: NgbModal, private service: DashboardService) {

        this.getAllChartData();
        this.getLocationWiseCount();
        this.getProjectTypeBillCount();
        //this.getWomenEmp();

        this.sliders.push(
            {
                imagePath: 'assets/images/bbh1.jpg',
                label: 'Daylight savings',
                text:
                    'Daylight savings changes from 11th March'
            },
            {
                imagePath: 'assets/images/bbh2.jpg',
                label: 'Mona chopra Visit',
                text: 'Mona Chopra visit Hexaware Mumbai office on 19th March.'
            },
            {
                imagePath: 'assets/images/bbh3.jpg',
                label: 'KPI Matrix ',
                text:
                    'KPI Matrix for March to be prepared.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );

    }


    ngOnInit() {
    }

    getAllChartData() {
        this.service.getAllChartData().subscribe(res => {
            this.chartData = res;

            const tempChartData = [];
            let tempChartDataType = '';
            const tempChartDataTypeLabel = [];
            this.chartData.forEach((item, index) => {
                tempChartDataTypeLabel.push(item.xAxisDate);
                tempChartData.push(item.yAxisDate);
                tempChartDataType = item.chartType;
            });
            tempChartDataType = tempChartDataType + ' %';
            this.barChartLabels = tempChartDataTypeLabel;
            this.barChartData = [{data: tempChartData, label: tempChartDataType}];
         });

    }

       getLocationWiseCount() {
           this.service.getLocationWiseCount().subscribe(res => {
               this.doughnutData = res;

               const tempChartData = [];
               const tempChartLabel = [];
               this.doughnutData.forEach((item, index) => {
                   tempChartLabel.push(item[0]);
                   tempChartData.push(item[1]);
               });
               this.doughnutChartLabels = tempChartLabel;
               this.doughnutChartData = tempChartData;
           });
       }

           getProjectTypeBillCount() {
               this.service.getProjectTypeBillCount().subscribe(res => {
                   this.pieData = res;

                   const tempPieChartData = [];
                   const tempPieChartLabel = [];
                   this.pieData.forEach((item, index) => {
                       tempPieChartLabel.push(item[0]);
                       tempPieChartData.push(item[1]);
                   });
                   this.pieChartLabels = tempPieChartLabel;
                   this.pieChartData = tempPieChartData;
               });
    }

/*    getWomenEmp() {
        this.service.getWomenEmp().subscribe(res => {
            this.pullUsers = res;
            this.pullUsers.forEach((item, index) => {
                this.gender = index[0];
                this.count = index[1];
            });



        });
    }*/


    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
