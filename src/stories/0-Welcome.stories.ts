import { Welcome } from "@storybook/angular/demo";
import { moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import {
  GithubButtonComponent,
  HeaderComponent,
  FooterComponent,
  ResourceLinkComponent,
  RocketBadgeComponent,
  CircleLinkComponent,
  StepButtonComponent,
  AuguryIconComponent,
  CliIconComponent,
  FirebaseIconComponent,
  ProtractorIconComponent,
  MeetupIconComponent,
  GitterIconComponent,
  RocketIconComponent,
  AcademyIconComponent,
  NextIconComponent,
  CodeIconComponent,
  FireIconComponent,
  PlusIconComponent,
  StarIconComponent,
  AngularIconComponent,
  TwitterIconComponent,
} from "../../projects/atomic-component/src/public-api";

export default {
  title: "Welcome",
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [
        GithubButtonComponent,
        HeaderComponent,
        FooterComponent,
        ResourceLinkComponent,
        RocketBadgeComponent,
        CircleLinkComponent,
        StepButtonComponent,
        FooterComponent,
        AuguryIconComponent,
        CliIconComponent,
        FirebaseIconComponent,
        ProtractorIconComponent,
        MeetupIconComponent,
        GitterIconComponent,
        RocketIconComponent,
        AcademyIconComponent,
        NextIconComponent,
        CodeIconComponent,
        FireIconComponent,
        PlusIconComponent,
        StarIconComponent,
        AngularIconComponent,
        TwitterIconComponent,
      ],
      imports: [CommonModule],
    }),
  ],
};

export const ToStorybook = () => ({
  template: `
    <section>
      <h2>Main Header</h2>
      <m-header></m-header>
      <h2>Github button</h2>
      <div class="github-button-container">
        <a-github-button></a-github-button>
      </div>
      <h2>Resource Link</h2>
      <div class="resource-link-container">
        <a-resource-link></a-resource-link>
      </div>
      <h2>Circle Link</h2>
      <a-circle-link>
        <i-firebase></i-firebase>
      </a-circle-link>
      <h2>Step Button</h2>
      <div class="step-button-container">
        <a-step-button></a-step-button>
      </div>
      <h2>Rocket Badge</h2>
      <div class="rocket-badge-container">
        <br />
        <a-rocket-banner></a-rocket-banner>
        <br />
      </div>
      <h2>Footer</h2>
      <m-footer></m-footer>
    </section>
  `,
  styles: [
    `
    .resource-link-container {
      width: 234px;
    }

    .circle-link-container {
      width: 202px;
    }

    .step-button-container {
      width: 202px;
    }

    .rocket-badge-container {
      width: 290px;
    }

    .github-button-container {
      width: 68px;
    }
  `,
  ],
  props: {},
});

ToStorybook.story = {
  name: "to Storybook",
};
