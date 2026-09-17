import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  output,
} from "@angular/core";
import DIYWebsiteBuilderEditor from "@diy-website-builder/sdk";

/**
 * Mounts the SDK into a DOM node and destroys it on unmount or identity change.
 */
@Component({
  selector: "app-diywb-editor",
  standalone: true,
  template: `<div #host class="editor-mount"></div>`,
})
export class DiywbEditorComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input({ required: true }) apiKey!: string;
  @Input({ required: true }) shortId!: string;
  @Input() exitUrl?: string;
  readonly publish = output<string | undefined>();

  @ViewChild("host", { static: true })
  private host!: ElementRef<HTMLDivElement>;

  private editor?: { destroy: () => void };
  private viewReady = false;

  ngAfterViewInit() {
    this.viewReady = true;
    this.mount();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.viewReady) return;
    if (changes["apiKey"] || changes["shortId"] || changes["exitUrl"]) {
      this.mount();
    }
  }

  ngOnDestroy() {
    this.editor?.destroy();
    this.editor = undefined;
  }

  private mount() {
    this.editor?.destroy();
    this.editor = undefined;
    const container = this.host?.nativeElement;
    if (!container || !this.apiKey) return;

    this.editor = new DIYWebsiteBuilderEditor.Builder({
      apiKey: this.apiKey,
      shortId: this.shortId,
      container,
      exitURL: this.exitUrl,
      onPublish: (url) => this.publish.emit(url),
    });
  }
}
