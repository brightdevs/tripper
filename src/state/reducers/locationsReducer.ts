import { ActionType } from '../action-types';
import { Action } from '../actions';
interface ILocationsReducerState {
  locations: string[];
  isLoading: boolean;
  error: string;
}

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
