import { createStore, applyMiddleware } from redux;
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middWare = [thunk];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
