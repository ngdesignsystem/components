import { Component, Input } from "@angular/core";

@Component({
  selector: "a-github-button",
  template: `
    <div>
      <div class="github-start-badge-container">
        <div class="github-star-badge">
          <i-star class="material-icons"></i-star>
          {{ label }}
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      svg.material-icons {
        height: 24px;
        width: auto;
      }

      .github-start-badge-container {
        line-height: 20px;
      }

      .github-star-badge {
        color: #24292e;
        display: flex;
        align-items: center;
        font-size: 12px;
        padding: 3px 10px;
        border: 1px solid rgba(27, 31, 35, 0.2);
        border-radius: 3px;
        background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
        margin-left: 4px;
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
          Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
      }

      .github-star-badge:hover {
        background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);
        border-color: rgba(27, 31, 35, 0.35);
        background-position: -0.5em;
      }

      .github-star-badge .material-icons {
        height: 24px;
        width: auto;
      }

      svg#clouds {
        position: fixed;
        bottom: -160px;
        left: -230px;
        z-index: -10;
        width: 1920px;
      }
    `,
  ],
})
export class GithubButtonComponent {
  @Input() label: string = "Star";
  constructor() {}
}
