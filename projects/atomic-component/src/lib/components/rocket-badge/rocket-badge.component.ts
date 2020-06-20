import { Component, Input } from "@angular/core";

@Component({
  selector: "ui-rocket-badge",
  template: `
    <!-- Highlight Card -->
    <div class="card highlight-card card-small">
      <svg
        id="rocket"
        alt="Rocket Ship"
        xmlns="http://www.w3.org/2000/svg"
        width="101.678"
        height="101.678"
        viewBox="0 0 101.678 101.678"
      >
        <g id="Group_83" data-name="Group 83" transform="translate(-141 -696)">
          <circle
            id="Ellipse_8"
            data-name="Ellipse 8"
            cx="50.839"
            cy="50.839"
            r="50.839"
            transform="translate(141 696)"
            fill="#dd0031"
          />
          <g
            id="Group_47"
            data-name="Group 47"
            transform="translate(165.185 720.185)"
          >
            <path
              id="Path_33"
              data-name="Path 33"
              d="M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z"
              transform="translate(0.371 3.363)"
              fill="#fff"
            />
            <path
              id="Path_34"
              data-name="Path 34"
              d="M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z"
              transform="translate(0 0.005)"
              fill="#fff"
            />
          </g>
        </g>
      </svg>

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

      svg#rocket {
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
