import { action } from "@storybook/addon-actions";

import { withKnobs, text } from "@storybook/addon-knobs";
import {
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
} from "../../projects/atomic-component/src/public-api";

export default {
  title: "Foundation/Icons",
  decorators: [withKnobs],
  parameters: {
    knobs: {
      disableDebounce: true,
    },
    docs: { iframeHeight: "calc(50vh)" },
  },
};

export const IconsImpl = () => {
  return {
    moduleMetadata: {
      declarations: [
        FirebaseIconComponent,
        CliIconComponent,
        AuguryIconComponent,
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
      ],
    },
    styles: [
      `*, *:before, *:after {
        box-sizing: border-box;
        outline: none;
      }
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
        grid-gap: 20px;
        width: 80%;
        margin: 0 auto;
      }
     `,
    ],
    template: `
        <div [ngStyle]="{'width': '100%'}">
          <div class="grid-container">
            <i-cli [width]="100" [height]="100"></i-cli>
            <i-augury [width]="100" [height]="100"></i-augury>
            <i-protractor [width]="100" [height]="100"></i-protractor>
            <i-meetup [width]="100" [height]="100"></i-meetup>
            <i-gitter [width]="100" [height]="100"></i-gitter>
            <i-rocket></i-rocket>
            <i-academy [width]="100" [height]="100"></i-academy>
            <i-next [width]="100" [height]="100"></i-next>
            <i-code [width]="100" [height]="100"></i-code>
            <i-fire [width]="100" [height]="100"></i-fire>
            <i-plus [width]="100" [height]="100"></i-plus>
            <i-star [width]="100" [height]="100"></i-star>
      </div>
    </div>
    `,
    props: {
      label: text("label", "Star"),
    },
  };
};

IconsImpl.storyName = "basic";
