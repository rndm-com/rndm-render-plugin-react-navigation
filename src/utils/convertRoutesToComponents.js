import { build } from '@rndm/render';

const convertRoutesToComponents = (routes = {}) => (
  Object.keys(routes).reduce((o, i) => ({
    ...o,
    [i]: build(routes[i]),
  }),{})
);

export default convertRoutesToComponents;
