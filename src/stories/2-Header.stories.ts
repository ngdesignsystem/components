// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

// import { HeaderComponent as Header } from "projects/atomic-component/src/public-api";

// export default {
//   title: "Header",
//   component: Header,
// };

// export const FullWidth = () => ({
//   component: Header,
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
  const name = text("name", "John Doe");
  const age = number("age", 0);
  const phoneNumber = text("phoneNumber", "555-55-55");

  return {
    moduleMetadata: {
      declarations: [Header, AngularIconComponent, TwitterIconComponent],
    },
    template: `
        <div [ngStyle]="{'width': '100%'}">
          <m-header>
          </m-header>
        </div>
      `,
    props: {
      title: text("title", "Component dependencies"),
    },
  };
};

HeaderImpl.storyName = "basic";
