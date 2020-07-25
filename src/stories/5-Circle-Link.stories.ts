// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

// import { CircleLinkComponent as CircleLink } from "projects/atomic-component/src/public-api";

// export default {
//   title: "Circle Link",
//   component: CircleLink,
// };

// export const Default = () => ({
//   component: CircleLink,
//   props: {},
// });

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
  const name = text("name", "John Doe");
  const age = number("age", 0);
  const phoneNumber = text("phoneNumber", "555-55-55");

  return {
    moduleMetadata: {
      declarations: [CircleLink, FirebaseIconComponent],
    },
    template: `
        <div [ngStyle]="{'width': '100px'}">
          <a-circle-link>
            <i-firebase></i-firebase>
          </a-circle-link>
        </div>
      `,
    props: {},
  };
};

CircleLinkImpl.storyName = "basic";
