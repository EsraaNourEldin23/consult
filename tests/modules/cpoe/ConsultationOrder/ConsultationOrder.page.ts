import { Locator, Page } from '@playwright/test';
import { url } from 'inspector';
//import playwrightConfig from '../playwright.config';
export  class ConsultationOrderPage {
    readonly page: Page;
    //readonly IPDPatientbutton: Locator;
    readonly orderTabButton: Locator;
    readonly ConsultationOrderBtn: Locator;
    readonly ConsultReasonDDl: Locator;
    readonly ChooseReason: Locator;
    readonly ConsultSpecialty: Locator;
    readonly ChooseSpecialty: Locator;
    readonly ConsultantName: Locator;
    readonly ChooseName: Locator;
    readonly SaveConsultationOrder: Locator;
    readonly EditCosultationOrder: Locator;
    readonly UrgencyDDL: Locator;
    readonly ChooseUrgency: Locator;
    readonly Save: Locator;
    readonly PerformIcon: Locator;
    readonly ConsultationNote: Locator;
    readonly SaveAndComplete: Locator;



constructor(page) {
        this.page = page; 
        //this.IPDPatientbutton = page.locator('#no23084797');
        this.orderTabButton = page.locator('[class="k-state-default k-item k-link OrdersTab has-menu customNavItem"]');
        this.ConsultationOrderBtn = page.locator('#PortalTabStrip > ul > li.k-state-default.k-item.k-link.OrdersTab.has-menu > ul > li:nth-child(3)');
        this.ConsultReasonDDl = page.locator('#ReferralReasonID-DDL > span > span.k-select > span');
        this.ChooseReason = page.locator('#ReferralReasonID-DDL > span > span.k-select > span:nth(0)');
        this.ConsultSpecialty = page.locator('#ReferralSpecialtyToID-DDL > span > span.k-select > span');
        this.ChooseSpecialty = page.locator('#ReferralSpecialtyToID-DDL > span > span.k-input.:nth(90)');
        this.ConsultantName = page.locator('#ReferralToDRID');
        this.ChooseName = page.locator('#ReferralToDRID_listbox > li.k-item.ng-scope.k-state-hover:nth(0)');
        this.SaveConsultationOrder = page.locator('#saveAdmissionOrder');
        this.EditCosultationOrder = page.locator('#editOrdersId > i');
        this.UrgencyDDL = page.locator('#UrgencyID-DDL > span > span.k-select > span');
        this.ChooseUrgency = page.locator('[class="k-widget k-dropdown k-header form-control ng-valid ng-isolate-scope ddl-text-placeHolder ng-valid-parse ng-touched ng-pristine:nth(1)"]');
        this.Save = page.locator('#saveAdmissionOrder');
        this.PerformIcon = page.locator('#patientInfoCont > div > div > div.OrderEntryandManagement.OrderManagement.ReferralOrder.ng-scope > div.ReferralOrderList.col-lg-5.ml0.pl0.ng-scope > div > div > div.panel-collapse.customScrollbar > div > div:nth-child(1) > div.col-lg-3.ml0.mr0.pr0.mt5.actions.pl0 > div > button.btn-link.mt3 > img');
        this.ConsultationNote = page.locator('[class="defaulttextarea form-control k-textbox ng-valid ng-touched ng-dirty ng-valid-parse"]');
        this.SaveAndComplete = page.locator('[class="btn btn-transparent ng-binding"]');
        
    }


    async goto(Url){
            await this.page.goto(Url);
        }

        // Before Order Entry
        async dashboard(){
            //await this.IPDPatientbutton.click();
            await this.orderTabButton.click();
            await this.ConsultationOrderBtn.click();
        }

        // Consultation Reason DDL
        async AddReason(){
            await this.ConsultReasonDDl.click();
            await this.ChooseReason.click();
        }

        // Consultation Specialty DDL
        async AddSpecialty(){
            await this.ConsultSpecialty.click();
            await this.ChooseSpecialty.click();
        }

        // Consultation Name
        async AAConsultantMame(){
            await this.ConsultantName.click();
            await this.ConsultantName.fill('a');
            await this.ChooseName.click();
        }

        // Save Consultation order
        async SaveButton(){
            await this.SaveConsultationOrder.click();
        }

        // Edit Consultation Order
        async EditConsultation(){
            await this.EditCosultationOrder.click();
        }

        // Click on Urgency DDL
        async Urgency(){
            await this.UrgencyDDL.click();
        }

        // Choose Urgency 
        async UrgencyChoice(){
            await this.ChooseUrgency.click();
        }

        // Save Changes
        async SaveChanges(){
            await this.Save.click();
        }

        // Perform icon
        async PerfomIcon(){
            await this.PerformIcon.click();
        }

        // Add Notes
        async AddNotes(){
            await this.ConsultationNote.click();
            await this.ConsultationNote.fill('test1');
        }

        // Save & Complete
        async SaveComplete(){
            await this.SaveAndComplete.click();
        }
    }
