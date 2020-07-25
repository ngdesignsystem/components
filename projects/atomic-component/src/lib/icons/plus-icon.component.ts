import { Component, Input } from "@angular/core";

@Component({
  selector: "i-plus",
  template: `
    <svg
      class="material-icons"
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="width + 'px'"
      [attr.height]="height + 'px'"
      viewBox="0 0 24 24"
    >
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
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
export class PlusIconComponent {
  @Input() width: number = 24;
  @Input() height: number = 24;
  constructor() {}
}
