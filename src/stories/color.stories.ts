import { action } from "@storybook/addon-actions";

import { text } from "@storybook/addon-knobs";

export default {
  title: "Foundation/Colors",
  decorators: [],
  parameters: {
    docs: { iframeHeight: "calc(50vh)" },
  },
};

export const ColorsImpl = () => {
  return {
    moduleMetadata: {
      declarations: [],
    },
    styles: [
      `*, *:before, *:after {
        box-sizing: border-box;
        outline: none;
      }
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
        grid-gap: 20px;
        width: 80%;
        margin: 0 auto;
      }
      .grid-container .cell {
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
        color: #fff;
      }
      .grid-container .card {
        display: grid;
        grid-gap: 0;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      }
      .grid-container .card:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      }
      .grid-container .card > .cell {
        position: relative;
        display: flex;
        border-radius: 0;
        align-items: center;
        justify-content: space-between;
      }
      .grid-container .card > .cell:nth-of-type(1) {
        grid-column: 1;
        grid-row: 1;
        height: 150px;
      }
      .grid-container .card > .cell:nth-of-type(1):hover:before {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: rgba(34, 34, 34, 0.4);
        font-size: 13px;
        font-weight: 700;
      }
      .grid-container .card > .cell:nth-of-type(2) {
        grid-column: 2;
        grid-row: 1;
        height: 150px;
      }
      .grid-container .card > .cell:nth-of-type(2):hover:before {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: rgba(34, 34, 34, 0.4);
        font-size: 13px;
        font-weight: 700;
      }
      .grid-container .card > .cell:nth-of-type(3) {
        grid-column: 1 / 3;
        grid-row: 2;
        padding: 20px;
        background-color: #4d4d4d;
      }
      .grid-container .card > .cell button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background-color: transparent;
        border: 2px solid rgba(245, 245, 245, 0.4);
        border-radius: 50%;
        color: rgba(245, 245, 245, 0.4);
        transition: 0.25s;
      }
      .grid-container .card > .cell button:hover {
        border: 2px solid whitesmoke;
        color: whitesmoke;
      }
      .grid-container .card > .cell button i {
        font-size: 16px;
      }
      .grid-container .card.color-1 .cell:nth-of-type(1) {
        background-color: #1976d2;
      }
      .grid-container .card.color-1 .cell:nth-of-type(2) {
        background-color: #1976d2;
      }
      .grid-container .card.color-2 .cell:nth-of-type(1) {
        background-color: #ffffff;
      }
      .grid-container .card.color-2 .cell:nth-of-type(2) {
        background-color: #ffffff;
      }
      .grid-container .card.color-3 .cell:nth-of-type(1) {
        background-color: #eee;
      }
      .grid-container .card.color-3 .cell:nth-of-type(2) {
        background-color: #eee;
      }
      .grid-container .card.color-4 .cell:nth-of-type(1) {
        background-color: #fafafa;
      }
      .grid-container .card.color-4 .cell:nth-of-type(2) {
        background-color: #fafafa;
      }
      .grid-container .card.color-5 .cell:nth-of-type(1) {
        background-color: #888;
      }
      .grid-container .card.color-5 .cell:nth-of-type(2) {
        background-color: #888;
      }
      .grid-container .card.color-6 .cell:nth-of-type(1) {
        background-color: #c2c3c4;
      }
      .grid-container .card.color-6 .cell:nth-of-type(2) {
        background-color: #c2c3c4;
      }
      .grid-container .card.color-7 .cell:nth-of-type(1) {
        background-color: #333;
      }
      .grid-container .card.color-7 .cell:nth-of-type(2) {
        background-color: #333;
      }
      .grid-container .color-name {
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.03125rem;
      }
      .grid-container .color-hex,
      .grid-container .color-rgb {
        font-size: 12px;
      }`,
    ],
    template: `
        <div [ngStyle]="{'width': '100%'}">
          <div class="grid-container">
            <!-- Row 1 -->
            <div class="cell grid-container card color-1">
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell">
                    <div class="info">
                        <div class="color-name">blue</div>
                        <div class="color-hex">#1976d2</div>
                    </div>
                </div>
            </div>
          <div class="cell grid-container card color-2">
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell">
                  <div class="info">
                      <div class="color-name">white</div>
                      <div class="color-hex">#ffffff</div>
                  </div>
              </div>
          </div>
          <div class="cell grid-container card color-3">
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell">
                  <div class="info">
                      <div class="color-name">semiDarkGray</div>
                      <div class="color-hex">#eee</div>
                  </div>
              </div>
          </div>

          <!-- Row 2 -->
          <div class="cell grid-container card color-4">
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell">
                  <div class="info">
                      <div class="color-name">lightGray</div>
                      <div class="color-hex">#fafafa</div>
                  </div>
              </div>
          </div>
          <div class="cell grid-container card color-5">
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell">
                  <div class="info">
                      <div class="color-name">darkGray</div>
                      <div class="color-hex">#888</div>
                  </div>
              </div>
          </div>
          <div class="cell grid-container card color-6">
              <div class="cell"></div>
              <div class="cell"></div>
              <div class="cell">
                  <div class="info">
                      <div class="color-name">gray</div>
                      <div class="color-hex">#c2c3c4</div>
                  </div>
              </div>
          </div>

        <!-- Row 3 -->
        <div class="cell grid-container card color-7">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell">
                <div class="info">
                    <div class="color-name">Black</div>
                    <div class="color-hex">#333</div>
                </div>
            </div>
        </div>
      </div>
    </div>
    `,
    props: {},
  };
};

ColorsImpl.storyName = "All";
