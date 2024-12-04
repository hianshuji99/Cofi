import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginPageComponent } from "./views/login-page/login-page.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {

  constructor(public translateService: TranslateService) {
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
    // this.router.navigate(['/search']);
  }

}
