import { Component, Input } from "@angular/core";

@Component({
  selector: "i-star",
  template: `
    <svg
      class="material-icons"
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="width + 'px'"
      [attr.height]="height + 'px'"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  `,
  styles: [],
})
export class StarIconComponent {
  @Input() width: number = 24;
  @Input() height: number = 24;
  constructor() {}
}
