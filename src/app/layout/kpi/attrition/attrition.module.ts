import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AttritionRoutingModule } from './attrition-routing.module';

import { PageHeaderModule } from '../../../shared';

import { AttritionComponent } from './attrition.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        Ng2Charts,
        AttritionRoutingModule,
        NgbModule.forRoot(),
        PageHeaderModule
    ],
    declarations: [
        AttritionComponent
    ]
})
export class AttritionModule {}
