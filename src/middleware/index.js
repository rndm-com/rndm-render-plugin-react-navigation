import { noop } from 'lodash';
import { withNavigation, withNavigationFocus } from 'react-navigation';

const middleware = [
  {
    type: 'withNavigation',
    value: {
      method: () => withNavigation,
      resolve: noop,
    },
  },
  {
    type: 'withNavigationFocus',
    value: {
      method: () => withNavigationFocus,
      resolve: noop,
    },
  }
];

export default middleware;
