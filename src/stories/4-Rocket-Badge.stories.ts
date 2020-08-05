import { action } from "@storybook/addon-actions";

import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  radios,
  color,
  date,
  button,
} from "@storybook/addon-knobs";

import { RocketBadgeComponent as RocketBadge } from "projects/atomic-component/src/public-api";
import { RocketIconComponent } from "../../projects/atomic-component/src/public-api";

export default {
  title: "Components/Atoms/Rocket Banner",
  decorators: [withKnobs],
  parameters: {
    knobs: {
      disableDebounce: true,
    },
    docs: { iframeHeight: 100 },
  },
};

export const RocketBadgeImpl = () => {
  return {
    moduleMetadata: {
      declarations: [RocketBadge, RocketIconComponent],
    },
    template: `
        <div [ngStyle]="{'width': '100%'}">
          <a-rocket-banner [appName]="appName">
          </a-rocket-banner>
        </div>
      `,
    props: {
      appName: text("appName", "Atomic App"),
    },
  };
};

RocketBadgeImpl.storyName = "basic";
