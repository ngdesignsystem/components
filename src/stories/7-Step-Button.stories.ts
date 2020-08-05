// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

// import { StepButtonComponent as StepButton } from "projects/atomic-component/src/public-api";

// export default {
//   title: "Step Button",
//   component: StepButton,
// };

// export const FullWidth = () => ({
//   component: StepButton,
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

import { StepButtonComponent as StepButton } from "projects/atomic-component/src/public-api";

export default {
  title: "Components/Atoms/Step Button",
  decorators: [withKnobs],
  parameters: {
    knobs: {
      disableDebounce: true,
    },
    docs: { iframeHeight: 100 },
  },
};

export const StepButtonImpl = () => {
  return {
    moduleMetadata: {
      declarations: [StepButton],
    },
    template: `
        <div [ngStyle]="{'width': '150px'}">
          <a-step-button [name]="name">
          </a-step-button>
        </div>
      `,
    props: {
      name: text("name", "Learning material"),
    },
  };
};

StepButtonImpl.storyName = "basic";
