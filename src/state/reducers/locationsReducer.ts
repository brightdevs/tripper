import { ActionType } from '../action-types';
import { Action } from '../actions';
import { ILocationsReducerState } from '../../interfaces';

const initialState: ILocationsReducerState = {
  locations: [],
  isLoading: false,
  error: '',
};

const reducer = (
  state = initialState,
  action: Action
): ILocationsReducerState => {
  switch (action.type) {
    case ActionType.LOAD_LOCATIONS:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case ActionType.LOAD_LOCATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        locations: action.payload,
      };
    case ActionType.LOAD_LOCATIONS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
