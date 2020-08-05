import { Component, Input } from "@angular/core";

@Component({
  selector: "a-resource-link",
  template: `
    <a
      class="resource-link"
      target="_blank"
      rel="noopener"
      href="https://angular.io/tutorial"
    >
      <svg
        class="material-icons"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
        />
      </svg>

      <span>{{ name }}</span>

      <i-next
        class="next-icon"
        [style.display]="'flex'"
        [width]="24"
        [height]="24"
      ></i-next>
    </a>
  `,
  styles: [
    `
      svg.material-icons {
        height: 24px;
        width: auto;
      }

      svg.material-icons:not(:last-child) {
        margin-right: 8px;
      }

      .resource-link .material-icons path {
        fill: #888;
      }

      .next-icon {
        fill: #888;
      }

      .resource-link {
        border-radius: 4px;
        border: 1px solid #eee;
        background-color: #fafafa;
        height: 74px;
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in-out;
        line-height: 24px;
      }

      .resource-link {
        cursor: pointer;
      }

      .resource-link:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
      }

      .resource-link:hover .material-icons path {
        fill: rgb(105, 103, 103);
      }

      .resource-link:hover .next-icon {
        fill: rgb(105, 103, 103);
      }
    `,
  ],
})
export class ResourceLinkComponent {
  @Input() name: string;
  constructor() {}
}
