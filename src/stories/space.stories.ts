import { action } from "@storybook/addon-actions";

import { text } from "@storybook/addon-knobs";

export default {
  title: "Foundation/Spacing System",
  decorators: [],
  parameters: {
    docs: { iframeHeight: "calc(50vh)" },
  },
};

const scales = {
  "spacing-01": "0.125rem",
  "spacing-02": "0.25rem",
  "spacing-03": "0.5rem",
  "spacing-04": "0.75rem",
  "spacing-05": "1rem",
  "spacing-06": "1.5rem",
  "spacing-07": "2rem",
  "spacing-08": "2.5rem",
  "spacing-09": "3rem",
};

export const SpacesImpl = () => {
  return {
    moduleMetadata: {
      declarations: [],
    },
    styles: [
      `
      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      td, th {
        text-align: center;
        padding: 8px;
        height: 66px;
      }
      td.example {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      tr:nth-child(even) {
        background-color: #fafafa;
      }
      `,
    ],
    template: `
        <div [ngStyle]="{'width': '100%'}">
        <table width="100%">
        <tr>
          <th>key / token</th>
          <th>value</th>
          <th>example</th>
        </tr>
        <tr>
          <td align="center">1</td>
          <td align="center">spacing-01</td>
          <td align="center" class="example">
            <div
              [style.width.px]="2"
              [style.height.px]="2"
              [style.background-color]="'#1976d2'"
            >
            </div>
          </td>
        </tr>
        <tr>
          <td align="center">2</td>
          <td align="center">spacing-02</td>
          <td align="center" class="example">
            <div
              [style.width.px]="4"
              [style.height.px]="4"
              [style.background-color]="'#1976d2'"
            >
            </div>
          </td>
        </tr>
        <tr>
          <td align="center">3</td>
          <td align="center">spacing-03</td>
          <td align="center" class="example">
            <div
              [style.width.px]="8"
              [style.height.px]="8"
              [style.background-color]="'#1976d2'"
            >
            </div>
          </td>
        </tr>
        <tr>
          <td align="center">4</td>
          <td align="center">spacing-04</td>
          <td align="center" class="example">
            <div
              [style.width.px]="12"
              [style.height.px]="12"
              [style.background-color]="'#1976d2'"
            >
            </div>
          </td>
        </tr>
        <tr>
          <td align="center">5</td>
          <td align="center">spacing-05</td>
          <td align="center" class="example">
            <div
              [style.width.px]="16"
              [style.height.px]="16"
              [style.background-color]="'#1976d2'"
            >
            </div>
          </td>
        </tr>
        <tr>
          <td align="center">6</td>
          <td align="center">spacing-06</td>
          <td align="center" class="example">
            <div
              [style.width.px]="24"
              [style.height.px]="24"
              [style.background-color]="'#1976d2'"
            >
            </div>
          </td>
        </tr>
        <tr>
          <td align="center">7</td>
          <td align="center">spacing-07</td>
          <td align="center" class="example">
            <div
              [style.width.px]="32"
              [style.height.px]="32"
              [style.background-color]="'#1976d2'"
            >
            </div>
          </td>
        </tr>
        <tr>
          <td align="center">8</td>
          <td align="center">spacing-08</td>
          <td align="center" class="example">
            <div
              [style.width.px]="40"
              [style.height.px]="40"
              [style.background-color]="'#1976d2'"
            >
            </div>
          </td>
        </tr>
        <tr>
          <td align="center">9</td>
          <td align="center">spacing-09</td>
          <td align="center" class="example">
            <div
              [style.width.px]="48"
              [style.height.px]="48"
              [style.background-color]="'#1976d2'"
            >
            </div>
          </td>
        </tr>
      </table>
    </div>
    `,
    props: { scales },
  };
};

SpacesImpl.storyName = "All";
