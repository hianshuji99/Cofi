import { Component, OnInit } from '@angular/core';
import { GlobalizationService } from 'src/app/Services/Globalization.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private service: GlobalizationService) { }

  ngOnInit(): void {
    this.GetAccountStatus();
    this.GetAccountTypes();
    this.GetAttributesOrFlags();
    this.GetLicensePlateCountries();
    this.GetLicensePlateStates();
  }

  account:boolean=false;
  phone:boolean=false;
  transponderid:boolean=false;
  plate:boolean=false;
  licenseplatecountry:boolean=false;
  licenseplatestate:boolean=false;
  trip:boolean=false;
  accounttypes:boolean=false;
  accountstatus:boolean=false;
  attribute:boolean=false;
  firstname:boolean=false;
  minimun3characters:boolean=false;
  lastname:boolean=false;
  businessname:boolean=false;
  emailaddress:boolean=false;
  address:boolean=false;
  city:boolean=false;
  zipcode:boolean=false;
  AccountStatusesMaster: any = [];
  AccountTypesMaster: any = [];
  AttributesOrFlagsMaster: any = [];
  LicensePlateCountriesMaster: any = [];
  LicensePlateStatesMaster: any = [];

  GetAccountStatus() {

    this.service.GetAccountStatuses().subscribe(
      (result: any) => {
        console.log('Request Sent Successfully', result.data);
        this.AccountStatusesMaster=result.data;
      },
      (error: any) => {
        console.error('Error Sending Request', error);

      }
    );
  }
  GetAccountTypes() {

    this.service.GetAccountTypes().subscribe(
      (result: any) => {
        console.log('Request Sent Successfully', result.data);
        this.AccountTypesMaster=result.data;
      },
      (error: any) => {
        console.error('Error Sending Request', error);

      }
    );
  }
  GetAttributesOrFlags() {

    this.service.GetAttributesOrFlags().subscribe(
      (result: any) => {
        console.log('Request Sent Successfully', result.data);
        this.AttributesOrFlagsMaster=result.data;
      },
      (error: any) => {
        console.error('Error Sending Request', error);

      }
    );
  }
  GetLicensePlateCountries() {

    this.service.GetLicensePlateCountries().subscribe(
      (result: any) => {
        console.log('Request Sent Successfully', result.data);
        this.LicensePlateCountriesMaster=result.data;
      },
      (error: any) => {
        console.error('Error Sending Request', error);

      }
    );
  }
  GetLicensePlateStates() {

    this.service.GetLicensePlateStates().subscribe(
      (result: any) => {
        console.log('Request Sent Successfully', result.data);
        this.LicensePlateStatesMaster=result.data;
      },
      (error: any) => {
        console.error('Error Sending Request', error);

      }
    );
  }
  focusFunction(str){
    if(str == 'account') this.account = true;
    if(str == 'phone') this.phone = true;
    if(str == 'transponderid') this.transponderid = true;
    if(str == 'licenseplatecountry') this.licenseplatecountry = true;
    if(str == 'licenseplatestate') this.licenseplatestate = true;
    if(str == 'accounttypes') this.accounttypes = true;
    if(str == 'accountstatus') this.accountstatus = true;
    if(str == 'attribute') this.attribute = true;
    if(str == 'firstname') this.firstname = true;
    if(str == 'lastname') this.lastname = true;
    if(str == 'businessname') this.businessname = true;
    if(str == 'emailaddress') this.emailaddress = true;
    if(str == 'address') this.address = true;
    if(str == 'city') this.city = true;
    if(str == 'zipcode') this.zipcode = true;
    if(str == 'plate') this.plate = true;
    if(str == 'trip') this.trip = true;
  }
  focusOutFunction(str){
    if(str == 'account') this.account = false;
    if(str == 'phone') this.phone = false;
    if(str == 'transponderid') this.transponderid = false;
    if(str == 'licenseplatecountry') this.licenseplatecountry = false;
    if(str == 'licenseplatestate') this.licenseplatestate = false;
    if(str == 'accounttypes') this.accounttypes = false;
    if(str == 'accountstatus') this.accountstatus = false;
    if(str == 'attribute') this.attribute = false;
    if(str == 'firstname') this.firstname = false;
    if(str == 'lastname') this.lastname = false;
    if(str == 'businessname') this.businessname = false;
    if(str == 'emailaddress') this.emailaddress = false;
    if(str == 'address') this.address = false;
    if(str == 'city') this.city = false;
    if(str == 'zipcode') this.zipcode = false;
    if(str == 'plate') this.plate = false;
    if(str == 'trip') this.trip = false;
  }

}
