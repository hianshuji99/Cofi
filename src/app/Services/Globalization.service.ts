import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalizationService {

  baseUrl = "https://webpocapi-gmeqfeakfegqg9e0.centralindia-01.azurewebsites.net/api/";

  authToken: string = '';
  private _headers!: HttpHeaders;
  private _headerslogin!: HttpHeaders;
  token = localStorage.getItem('BToken');

  constructor(private http: HttpClient, private router: Router) {
    this.setLoginSecurityHeaders();
    this.setSecurityHeaders();
  }

  setSecurityHeaders() {
    this._headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('BToken')
    });
  }

  setLoginSecurityHeaders() {
    this._headerslogin = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'
    });
  }

  GetLanguages(): Observable<any> {
    this._headers = new HttpHeaders();
    this._headers = this._headers.append("Content-Type", "application/json");
    this._headers = this._headers.append("Accept", "application/json");
    this._headers = this._headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");

    return this.http.post(this.baseUrl + "Master/GetLanguages", {  headers:this._headers });
  }
  GetLicensePlateCountries(): Observable<any> {
    this._headers = new HttpHeaders();
    this._headers = this._headers.append("Content-Type", "application/json");
    this._headers = this._headers.append("Accept", "application/json");
    this._headers = this._headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");

    return this.http.post(this.baseUrl + "Master/GetLicensePlateCountries", {  headers:this._headers });
  }
  GetLicensePlateStates(): Observable<any> {
    this._headers = new HttpHeaders();
    this._headers = this._headers.append("Content-Type", "application/json");
    this._headers = this._headers.append("Accept", "application/json");
    this._headers = this._headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");

    return this.http.post(this.baseUrl + "Master/GetLicensePlateStates", {  headers:this._headers });
  }
  GetAccountTypes(): Observable<any> {
    this._headers = new HttpHeaders();
    this._headers = this._headers.append("Content-Type", "application/json");
    this._headers = this._headers.append("Accept", "application/json");
    this._headers = this._headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");

    return this.http.post(this.baseUrl + "Master/GetAccountTypes", {  headers:this._headers });
  }
  GetAccountStatuses(): Observable<any> {
    this._headers = new HttpHeaders();
    this._headers = this._headers.append("Content-Type", "application/json");
    this._headers = this._headers.append("Accept", "application/json");
    this._headers = this._headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");

    return this.http.post(this.baseUrl + "Master/GetAccountStatuses", {  headers:this._headers });
  }
  GetAttributesOrFlags(): Observable<any> {
    this._headers = new HttpHeaders();
    this._headers = this._headers.append("Content-Type", "application/json");
    this._headers = this._headers.append("Accept", "application/json");
    this._headers = this._headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");

    return this.http.post(this.baseUrl + "Master/GetAttributesOrFlags", {  headers:this._headers });
  }
  
}
