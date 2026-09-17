import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { keepHostAtRoot } from "./keepHostAtRoot";

keepHostAtRoot();

bootstrapApplication(AppComponent).catch((error) => {
  console.error(error);
});
