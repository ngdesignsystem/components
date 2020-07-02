import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";

storiesOf(
  "Components|Molecules/ButtonGroupA",
  module
)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, AtomicComponentModule],
      schemas: [],
      declarations: [],
      entryComponents: [],
    })
  )
  .add("default", () => {
    return {
      template: `
        <div>
          
          
            <m-ButtonGroupA>
              ButtonGroupA works!
            </m-ButtonGroupA>
          
          
          
        </div> 
      `,
      props: {},
    };
  });
