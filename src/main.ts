import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}
registerLocaleData(localeRu);
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
