import { Component } from "@angular/core";

@Component({
  selector: "a-circle-link",
  template: `
    <a
      class="circle-link"
      title="Animations"
      href="https://angular.io/guide/animations"
      target="_blank"
      rel="noopener"
    >
      <ng-content></ng-content>
    </a>
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
export class CircleLinkComponent {
  constructor() {}
}
