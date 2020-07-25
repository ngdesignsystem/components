import { Component, Input } from "@angular/core";

@Component({
  selector: "i-academy",
  template: `
    <svg
      class="material-icons"
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="width + 'px'"
      [attr.height]="height + 'px'"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
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
export class AcademyIconComponent {
  @Input() width: number = 24;
  @Input() height: number = 24;
  constructor() {}
}
