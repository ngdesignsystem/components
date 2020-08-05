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

import { HeaderComponent as Header } from "projects/atomic-component/src/public-api";
import {
  AngularIconComponent,
  TwitterIconComponent,
} from "../../projects/atomic-component/src/public-api";

export default {
  title: "Components/Molecules/Header",
  decorators: [withKnobs],
  parameters: {
    knobs: {
      disableDebounce: true,
    },
    docs: { iframeHeight: 100 },
  },
};

export const HeaderImpl = () => {
  return {
    moduleMetadata: {
      declarations: [Header, AngularIconComponent, TwitterIconComponent],
    },
    template: `
        <div [ngStyle]="{'width': '100%'}">
          <m-header [title]="title">
          </m-header>
        </div>
      `,
    props: {
      title: text("title", "Welcome"),
    },
  };
};

HeaderImpl.storyName = "basic";
