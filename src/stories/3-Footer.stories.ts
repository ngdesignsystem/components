// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

// import { FooterComponent as Footer } from "projects/atomic-component/src/public-api";

// export default {
//   title: "Footer",
//   component: Footer,
// };

// export const FullWidth = () => ({
//   component: Footer,
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

import { FooterComponent as Footer } from "projects/atomic-component/src/public-api";

export default {
  title: "Components/Molecules/Footer",
  decorators: [withKnobs],
  parameters: {
    knobs: {
      disableDebounce: true,
    },
    docs: { iframeHeight: 100 },
  },
};

export const FooterImpl = () => {
  return {
    moduleMetadata: {
      declarations: [Footer],
    },
    template: `
        <div [ngStyle]="{'width': '100%'}">
          <m-footer>
          </m-footer>
        </div>
      `,
    props: {},
  };
};

FooterImpl.storyName = "basic";
