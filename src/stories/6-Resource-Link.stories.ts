// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

// import { ResourceLinkComponent as ResourceLink } from "projects/atomic-component/src/public-api";

// export default {
//   title: "Resource Link",
//   component: ResourceLink,
// };

// export const FullWidth = () => ({
//   component: ResourceLink,
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

import { ResourceLinkComponent as ResourceLink } from "projects/atomic-component/src/public-api";
import {
  StarIconComponent,
  PlusIconComponent,
  FireIconComponent,
  CodeIconComponent,
  NextIconComponent,
} from "../../projects/atomic-component/src/public-api";

export default {
  title: "Components/Atoms/Resource Link",
  decorators: [withKnobs],
  parameters: {
    knobs: {
      disableDebounce: true,
    },
    docs: { iframeHeight: 100 },
  },
};

export const ResourceLinkImpl = () => {
  return {
    moduleMetadata: {
      declarations: [ResourceLink, NextIconComponent],
    },
    template: `
        <div [ngStyle]="{'width': '200px'}">
          <a-resource-link [name]="name">
          </a-resource-link>
        </div>
      `,
    props: {
      name: text("name", "Learn Angular"),
    },
  };
};

ResourceLinkImpl.storyName = "basic";
