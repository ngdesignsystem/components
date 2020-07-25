// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
// import { withKnobs, text } from "@storybook/addon-knobs";

// import { GithubButtonComponent as GithubButton } from "projects/atomic-component/src/public-api";

// export default {
//   title: "Github Button",
//   component: GithubButton,
// };

// export const FullWidth = () => ({
//   component: GithubButton,
//   props: {
//     title: text("title", "Component dependencies"),
//   },
// });

// FullWidth.storyName = "Component with separate template";
// FullWidth.parameters = { docs: { iframeHeight: 400 } };
// FullWidth.decorators = [withKnobs];

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

import { GithubButtonComponent as GithubButton } from "projects/atomic-component/src/public-api";
import { StarIconComponent } from "../../projects/atomic-component/src/public-api";

export default {
  title: "Components/Atoms/Github Button",
  decorators: [withKnobs],
  parameters: {
    knobs: {
      disableDebounce: true,
    },
    docs: { iframeHeight: 100 },
  },
};

export const GithubButtonImpl = () => {
  return {
    moduleMetadata: {
      declarations: [GithubButton, StarIconComponent],
    },
    template: `
        <div [ngStyle]="{'width': '70px'}">
          <a-github-button [label]="label">
          </a-github-button>
        </div>
      `,
    props: {
      label: text("label", "Star"),
    },
  };
};

GithubButtonImpl.storyName = "basic";
