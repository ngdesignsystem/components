// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

// import { RocketBadgeComponent as RocketBadge } from "projects/atomic-component/src/public-api";

// export default {
//   title: "Rocket Button",
//   component: RocketBadge,
// };

// export const FullWidth = () => ({
//   component: RocketBadge,
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
  const name = text("name", "John Doe");
  const age = number("age", 0);
  const phoneNumber = text("phoneNumber", "555-55-55");

  return {
    moduleMetadata: {
      declarations: [RocketBadge, RocketIconComponent],
    },
    template: `
        <div [ngStyle]="{'width': '100%'}">
          <a-rocket-banner>
          </a-rocket-banner>
        </div>
      `,
    props: {
      title: text("title", "Component dependencies"),
    },
  };
};

RocketBadgeImpl.storyName = "basic";
