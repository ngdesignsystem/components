import { configure } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json'

const req = require.context('../src/stories', true, /\.stories\.ts$/);
setCompodocJson(docJson);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
