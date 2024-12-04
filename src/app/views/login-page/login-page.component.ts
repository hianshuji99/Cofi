import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public translateService: TranslateService, public router: Router,) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public changeLanguage(language: string): void {
    debugger;
    this.translateService.use(language);
  }

  onSubmit(){

  }

  // langChange(newValue){
  //   this.translateService.use(newValue);
  // }

  public langChange(language: string): void {
    debugger;
    this.translateService.use(language);
  }

  gotoSearchPage(){
    this.router.navigate(['/search']);
  }

}
