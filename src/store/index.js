/*
 * Npm import
 */
import { createStore,  applyMiddleware, compose } from 'redux';

/*
 * Local import
 */
// Reducer
import reducer from 'src/store/reducer';
import middleware from './middleware';

/*
 * Code
 */

const appliedMiddlewares = applyMiddleware(middleware);

const devTools = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];

const enhancers = compose(appliedMiddlewares, ...devTools);
// createStore
const store = createStore(reducer, enhancers);

/*
 * Export
 */
export default store;
