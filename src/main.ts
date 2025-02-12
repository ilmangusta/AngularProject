//non ho piu bosogno di questi elementi se utilizzo un appmodule
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
