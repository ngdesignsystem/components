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
  const name = text("name", "John Doe");
  const age = number("age", 0);
  const phoneNumber = text("phoneNumber", "555-55-55");

  return {
    moduleMetadata: {
      declarations: [ResourceLink],
    },
    template: `
        <div [ngStyle]="{'width': '200px'}">
          <a-resource-link>
          </a-resource-link>
        </div>
      `,
    props: {
      title: text("title", "Component dependencies"),
    },
  };
};

ResourceLinkImpl.storyName = "basic";
