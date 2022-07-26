import { ActionType } from '../action-types';

interface SearchLocations {
  type: ActionType.LOAD_LOCATIONS;
}
interface SearchLocationsSuccess {
  type: ActionType.LOAD_LOCATIONS_SUCCESS;
  payload: string[];
}
interface SearchLocationsError {
  type: ActionType.LOAD_LOCATIONS_ERROR;
  payload: string;
}

export type Action =
  | SearchLocations
  | SearchLocationsSuccess
  | SearchLocationsError;
