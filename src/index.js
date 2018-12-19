import { use } from '@rndm/render';
import components from './components';
import methods from './methods';
import middleware from './middleware';
import convertRoutesToComponents from './utils/convertRoutesToComponents';

const plugin = {
  key: 'react-navigation',
  components,
  methods,
  middleware,
};

use(plugin);

export {
  convertRoutesToComponents,
};

export default plugin;
