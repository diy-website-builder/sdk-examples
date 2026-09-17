import { Component } from "@angular/core";
import { DiywbEditorComponent } from "./diywb-editor.component";
import { DIYWB_API_KEY, DIYWB_SHORT_ID } from "../env";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [DiywbEditorComponent],
  template: `
    @if (!apiKey) {
      <p class="error">
        Set <code>DIYWB_API_KEY</code> in <code>src/env.ts</code> (see
        <code>.env.example</code>).
      </p>
    } @else {
      <div class="shell">
        <header class="shell-header">
          <div>
            <h1>Acme · Website</h1>
            <p>Angular host for &#64;diy-website-builder/sdk</p>
          </div>
        </header>
        <app-diywb-editor
          [apiKey]="apiKey"
          [shortId]="shortId"
          exitUrl="/"
          (publish)="onPublish($event)"
        />
      </div>
    }
  `,
})
export class AppComponent {
  readonly apiKey = DIYWB_API_KEY;
  readonly shortId = DIYWB_SHORT_ID;

  onPublish(url?: string) {
    console.log("published", url);
  }
}
