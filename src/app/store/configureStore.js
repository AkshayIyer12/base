import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

export const configureStore = (preloadedState) => {
    const middlewares = []
    const middlewareEnhancer = applyMiddleware(...middlewares)
    const storeEnhancers = [middlewareEnhancer]

    const composedEnhancer = composeWithDevTools(...storeEnhancers)
    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    )

    if (process.env.NODE_ENV !== 'production'){
      
        if (module.hot) {
            module.hot.accept('../reducers/rootReducer.js', () => {
              const nextRootReducer = require('../reducers/rootReducer.js').default;
              store.replaceReducer(nextRootReducer);
            });
          }

    }

   
    return store
}