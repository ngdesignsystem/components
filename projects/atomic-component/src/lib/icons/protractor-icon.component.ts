import { Component, Input } from "@angular/core";

@Component({
  selector: "i-protractor",
  template: `
    <svg
      alt="Angular Protractor Logo"
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="width + 'px'"
      [attr.height]="height + 'px'"
      viewBox="0 0 21.81 23.447"
    >
      <g id="Group_26" data-name="Group 26" transform="translate(0)">
        <path
          id="Path_28"
          data-name="Path 28"
          d="M4620.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z"
          transform="translate(-4609.274 -311.417)"
          fill="#e13439"
        />
        <path
          id="Path_29"
          data-name="Path 29"
          d="M4702.088,311.417v23.447l9.244-5.152,1.685-14.4Z"
          transform="translate(-4691.207 -311.417)"
          fill="#b52f32"
        />
        <path
          id="Path_30"
          data-name="Path 30"
          d="M4651.044,369.58v-.421h1.483a7.6,7.6,0,0,0-2.106-5.052l-1.123,1.123-.3-.3,1.122-1.121a7.588,7.588,0,0,0-4.946-2.055v1.482h-.421v-1.485a7.589,7.589,0,0,0-5.051,2.058l1.122,1.121-.3.3-1.123-1.123a7.591,7.591,0,0,0-2.106,5.052h1.482v.421h-1.489v1.734h15.241V369.58Zm-10.966-.263a4.835,4.835,0,0,1,9.67,0Z"
          transform="translate(-4634.008 -355.852)"
          fill="#fff"
        />
      </g>
    </svg>
  `,
  styles: [],
})
export class ProtractorIconComponent {
  @Input() width: number = 21.81;
  @Input() height: number = 23.447;
  constructor() {}
}
