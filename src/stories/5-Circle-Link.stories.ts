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

import { CircleLinkComponent as CircleLink } from "projects/atomic-component/src/public-api";
import { FirebaseIconComponent } from "projects/atomic-component/src/public-api";

export default {
  title: "Components/Atoms/Circle Link",
  decorators: [withKnobs],
  parameters: {
    knobs: {
      disableDebounce: true,
    },
    docs: { iframeHeight: 100 },
  },
};

export const CircleLinkImpl = () => {
  const width = number("width", 40);
  const height = number("height", 40);

  return {
    moduleMetadata: {
      declarations: [CircleLink, FirebaseIconComponent],
    },
    template: `
        <div [ngStyle]="{'width': '100px'}">
          <a-circle-link [width]="width" [height]="height">
            <i-firebase [width]="width / 2" [height]="height / 2"></i-firebase>
          </a-circle-link>
        </div>
      `,
    props: {
      width,
      height,
    },
  };
};

CircleLinkImpl.storyName = "basic";
