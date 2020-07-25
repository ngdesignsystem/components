import { Component, Input } from "@angular/core";

@Component({
  selector: "i-code",
  template: `
    <svg
      class="material-icons"
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="width + 'px'"
      [attr.height]="height + 'px'"
      viewBox="0 0 24 24"
    >
      <path
        d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
      />
    </svg>
  `,
  styles: [
    `
      height: 24px;
      width: auto;
      path {
        fill: #888;
      }
    `,
  ],
})
export class CodeIconComponent {
  @Input() width: number = 24;
  @Input() height: number = 24;
  constructor() {}
}
