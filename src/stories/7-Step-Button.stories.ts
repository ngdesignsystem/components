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
  const name = text("name", "John Doe");
  const age = number("age", 0);
  const phoneNumber = text("phoneNumber", "555-55-55");

  return {
    moduleMetadata: {
      declarations: [StepButton],
    },
    template: `
        <div [ngStyle]="{'width': '150px'}">
          <a-step-button>
          </a-step-button>
        </div>
      `,
    props: {
      title: text("title", "Component dependencies"),
    },
  };
};

StepButtonImpl.storyName = "basic";
