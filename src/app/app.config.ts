import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig } from "@angular/platform-browser";

export const appConfig: ApplicationConfig = {
    providers: [provideHttpClient()]
}