import { Component, Input } from "@angular/core";

@Component({
  selector: "i-cli",
  template: `
    <svg
      alt="Angular CLI Logo"
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="width + 'px'"
      [attr.height]="height + 'px'"
      viewBox="0 0 21.762 23.447"
    >
      <g id="Group_21" data-name="Group 21" transform="translate(0)">
        <path
          id="Path_20"
          data-name="Path 20"
          d="M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z"
          transform="translate(-2649.48 -313.618)"
          fill="#37474f"
        />
        <path
          id="Path_21"
          data-name="Path 21"
          d="M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z"
          transform="translate(-2731.05 -313.618)"
          fill="#263238"
        />
        <path
          id="Path_22"
          data-name="Path 22"
          d="M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z"
          transform="translate(-2687.274 -362.17)"
          fill="#fff"
        />
        <path
          id="Path_23"
          data-name="Path 23"
          d="M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z"
          transform="translate(-2702.289 -380.631)"
          fill="#fff"
        />
        <rect
          id="Rectangle_12"
          data-name="Rectangle 12"
          width="3.517"
          height="0.469"
          transform="translate(9.709 13.744)"
          fill="#fff"
        />
      </g>
    </svg>
  `,
  styles: [],
})
export class CliIconComponent {
  @Input() width: number = 21.762;
  @Input() height: number = 23.447;
  constructor() {
    console.log(this);
  }
}
