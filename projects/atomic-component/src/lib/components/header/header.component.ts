import { Component } from "@angular/core";

@Component({
  selector: "m-header",
  template: `
    <div class="toolbar" role="banner">
      <i-angular id="angular-logo"></i-angular>
      <span>Welcome</span>
      <div class="spacer"></div>
      <a
        aria-label="Angular on twitter"
        target="_blank"
        rel="noopener"
        href="https://twitter.com/angular"
        title="Twitter"
      >
        <i-twitter id="twitter-logo"></i-twitter>
      </a>
    </div>
  `,
  styles: [
    `
      .toolbar {
        height: 60px;
        display: flex;
        align-items: center;
        background-color: #1976d2;
        color: white;
        font-weight: 600;
      }

      .toolbar #angular-logo {
        margin: 0 16px;
      }

      .toolbar #twitter-logo {
        height: 40px;
        margin: 0 16px;
      }

      .toolbar #twitter-logo:hover {
        opacity: 0.8;
      }
    `,
  ],
})
export class HeaderComponent {
  /**
   * The name of your app
   */
  title = "app";
  constructor() {}
}
