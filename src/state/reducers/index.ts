import { combineReducers } from 'redux';
import locationsReducer from './locationsReducer';

const reducers = combineReducers({
  locations: locationsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
