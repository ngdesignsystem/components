import { Component, Input } from "@angular/core";

@Component({
  selector: "i-gitter",
  template: `
    <svg
      alt="Gitter Logo"
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="width + 'px'"
      [attr.height]="height + 'px'"
      viewBox="0 0 19.447 19.447"
    >
      <g id="Group_40" data-name="Group 40" transform="translate(-1612 -405)">
        <rect
          id="Rectangle_19"
          data-name="Rectangle 19"
          width="19.447"
          height="19.447"
          transform="translate(1612 405)"
          fill="#e60257"
        />
        <g id="gitter" transform="translate(1617.795 408.636)">
          <g id="Group_33" data-name="Group 33" transform="translate(0 0)">
            <rect
              id="Rectangle_15"
              data-name="Rectangle 15"
              width="1.04"
              height="9.601"
              transform="translate(2.304 2.324)"
              fill="#fff"
            />
            <rect
              id="Rectangle_16"
              data-name="Rectangle 16"
              width="1.04"
              height="9.601"
              transform="translate(4.607 2.324)"
              fill="#fff"
            />
            <rect
              id="Rectangle_17"
              data-name="Rectangle 17"
              width="1.04"
              height="4.648"
              transform="translate(6.91 2.324)"
              fill="#fff"
            />
            <rect
              id="Rectangle_18"
              data-name="Rectangle 18"
              width="1.04"
              height="6.971"
              transform="translate(0 0)"
              fill="#fff"
            />
          </g>
        </g>
      </g>
    </svg>
  `,
  styles: [
    `
      .circle-link {
        height: 40px;
        width: 40px;
        border-radius: 40px;
        margin: 8px;
        background-color: white;
        border: 1px solid #eeeeee;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: 1s ease-out;
      }

      .circle-link:hover {
        transform: translateY(-0.25rem);
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
      }
    `,
  ],
})
export class GitterIconComponent {
  @Input() width: number = 19.447;
  @Input() height: number = 19.447;
  constructor() {}
}
