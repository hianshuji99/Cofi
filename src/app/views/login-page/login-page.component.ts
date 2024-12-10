import { Component, OnInit } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalizationService } from 'src/app/Services/Globalization.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  languageMaster: any = [];
  loginForm: FormGroup;
  constructor(public translateService: TranslateService, public router: Router,private service: GlobalizationService) {
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      language: new FormControl(),
    })
    this.GetLanguages();
  }
  GetLanguages() {

    this.service.GetLanguages().subscribe(
      (result: any) => {
        console.log('Request Sent Successfully', result.data);
        this.languageMaster=result.data;
      },
      (error: any) => {
        console.error('Error Sending Request', error);

      }
    );
  }
  public changeLanguage(language: string): void {
    // if (language === 'AE' || language === 'IL') {
    //   document.body.setAttribute('dir', 'rtl'); // Set Right-to-Left
    // } else {
    //   document.body.setAttribute('dir', 'ltr'); // Set Left-to-Right
    // }
    localStorage.setItem('language', language);
    this.translateService.use(language); // Use selected language
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
    let country = this.loginForm.get('language').value;
    localStorage.setItem("selectedCountry", country);
    if(country != null) this.router.navigate(['/search']);
    else return;
  }

}
