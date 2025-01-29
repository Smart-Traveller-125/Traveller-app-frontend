import { bootstrapApplication } from '@angular/platform-browser';
// import "mdb-ui-kit/css/mdb.min.css";
// import "mdb-ui-kit/js/mdb.min.js";
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
