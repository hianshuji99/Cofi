import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { SearchPageComponent } from './views/search-page/search-page.component';
import { AppRoutingModule } from './app-routing';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: 'en-US',
    }),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    LoginPageComponent,
    SearchPageComponent,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
