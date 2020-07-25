import { Component, Input } from "@angular/core";

@Component({
  selector: "i-next",
  template: `
    <svg
      class="material-icons"
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="width + 'px'"
      [attr.height]="height + 'px'"
      viewBox="0 0 24 24"
    >
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
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
export class NextIconComponent {
  @Input() width: number = 24;
  @Input() height: number = 24;
  constructor() {}
}
