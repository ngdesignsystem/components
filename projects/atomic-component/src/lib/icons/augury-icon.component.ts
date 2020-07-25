import { Component, Input } from "@angular/core";

@Component({
  selector: "i-augury",
  template: `
    <svg
      alt="Angular Augury Logo"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      [attr.width]="width + 'px'"
      [attr.height]="height + 'px'"
      viewBox="0 0 21.81 23.447"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_13"
            data-name="Rectangle 13"
            width="10.338"
            height="10.27"
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="Group_25" data-name="Group 25" transform="translate(0)">
        <path
          id="Path_24"
          data-name="Path 24"
          d="M3780.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z"
          transform="translate(-3769.274 -311.417)"
          fill="#4a3493"
        />
        <path
          id="Path_25"
          data-name="Path 25"
          d="M3862.088,311.417v23.447l9.244-5.152,1.685-14.4Z"
          transform="translate(-3851.207 -311.417)"
          fill="#311b92"
        />
        <g
          id="Group_24"
          data-name="Group 24"
          transform="translate(6.194 6.73)"
          opacity="0.5"
        >
          <g id="Group_23" data-name="Group 23" transform="translate(0 0)">
            <g id="Group_22" data-name="Group 22" clip-path="url(#clip-path)">
              <path
                id="Path_26"
                data-name="Path 26"
                d="M3832.4,373.252a5.168,5.168,0,1,1-5.828-4.383,5.216,5.216,0,0,1,2.574.3,3.017,3.017,0,1,0,3.252,4.086Z"
                transform="translate(-3822.107 -368.821)"
                fill="#fff"
              />
            </g>
          </g>
        </g>
        <path
          id="Path_27"
          data-name="Path 27"
          d="M3830.582,370.848a5.162,5.162,0,1,1-3.254-4.086,3.017,3.017,0,1,0,3.252,4.086Z"
          transform="translate(-3814.311 -359.969)"
          fill="#fff"
        />
      </g>
    </svg>
  `,
  styles: [``],
})
export class AuguryIconComponent {
  @Input() width: number = 21.81;
  @Input() height: number = 23.447;
  constructor() {}
}
