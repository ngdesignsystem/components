import { Component, Input } from "@angular/core";

@Component({
  selector: "a-rocket-banner",
  template: `
    <!-- Highlight Card -->
    <div class="card highlight-card card-small">
      <i-rocket id="rocket"> </i-rocket>
      <span>{{ title }} app is running!</span>
    </div>
  `,
  styles: [
    `
      .card {
        border-radius: 4px;
        border: 1px solid #eee;
        background-color: #fafafa;
        height: 40px;
        width: 200px;
        margin: 0 8px 16px;
        padding: 16px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in-out;
        line-height: 24px;
      }
      .card.card-small {
        height: 16px;
        width: 168px;
      }

      .card.highlight-card {
        background-color: #1976d2;
        color: white;
        font-weight: 600;
        border: none;
        width: auto;
        min-width: 30%;
        position: relative;
      }

      .card.card.highlight-card span {
        margin-left: 60px;
      }

      #rocket {
        width: 80px;
        position: absolute;
        left: -10px;
        top: -24px;
      }
    `,
  ],
})
export class RocketBadgeComponent {
  @Input() title: string;
  constructor() {}
}
