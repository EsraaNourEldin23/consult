import { test, expect, Page, Browser } from '@playwright/test'
import { ConsultationOrderPage } from './ConsultationOrder.page';
import {capturePatientPage} from '@tests/shared/components/capture-patient/capture-patient.page'
import { PatientData } from '@tests/shared/test-data/patient-data';
import { capturePatient } from '@tests/shared/components/capture-patient/capture-patient.spec';
//import {PatientData} from '@tests/shared/test-data/patient-data';

//let page:Page;
//let ConsultationOrderPage: any;

let page : Page;
let count=Date.now().toString();
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    //await new capturePatientPage(page);
    await capturePatient(page);
});

test('Before Order Entry', async () => {
    debugger
    const ConsultationOrder = new ConsultationOrderPage(page);
  // await ConsultationOrder.goto("/physicianDesktop");
    //const PatientData = new PatientData();
    await ConsultationOrder.dashboard();

    //await expect(page.locator('[class="pr0 bold l-s-1x text-lg ng-binding"]')).toBeVisible()
    //console.log('Consultation Order');

    await ConsultationOrder.AddReason();
    await ConsultationOrder.AddSpecialty();
    await ConsultationOrder.ConsultantMame();
    await ConsultationOrder.SaveButton();

    await expect(page.locator('#toast-container > div > div.ng-binding.toast-title')).toBeVisible()
    console.log('Saved Successfully!');
});


    test('Save new Consultation Order', async() => {
    const ConsultationOrder = new ConsultationOrderPage(page);    
    await ConsultationOrder.AddReason();
    await ConsultationOrder.AddSpecialty();
    await ConsultationOrder.ConsultantMame();
    await ConsultationOrder.SaveButton();

    await expect(page.locator('#toast-container > div > div.ng-binding.toast-title')).toBeVisible()
    console.log('Saved Successfully!');
});


test('Edit Consultation Order', async ({page}) => {
    const ConsultationOrder = new ConsultationOrderPage(page);
    await ConsultationOrder.goto(page);
    await ConsultationOrder.EditConsultation();
    await ConsultationOrder.Urgency();
    await ConsultationOrder.UrgencyChoice();
    await ConsultationOrder.SaveChanges();

    await expect(page.locator('#toast-container > div > div.ng-binding.toast-title')).toBeVisible()
    console.log('Saved Successfully!');
});


test('Perform icon', async ({page}) => {
    const ConsultationOrder = new ConsultationOrderPage(page);
    await ConsultationOrder.goto(page);
    await ConsultationOrder.PerfomIcon();
    await ConsultationOrder.AddNotes();
    await ConsultationOrder.SaveComplete();
    
    await expect(page.locator('#toast-container > div > div.ng-binding.toast-title')).toBeVisible()
    console.log('Performed Successfully!');
});