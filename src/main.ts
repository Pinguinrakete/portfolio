import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/*
 * The main.bootstrapApplication function is responsible for bootstrapping (starting) an Angular application. 
 * It initializes the root module (AppComponent) and provides the necessary configuration for the application 
 * (appConfig). If an error occurs during the bootstrap process, it is caught and logged to the console.
 */
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
