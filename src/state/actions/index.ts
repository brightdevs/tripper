import { ActionType } from '../action-types';
import { ILocation } from '../../interfaces';

interface SearchLocations {
  type: ActionType.LOAD_LOCATIONS;
}
interface SearchLocationsSuccess {
  type: ActionType.LOAD_LOCATIONS_SUCCESS;
  payload: ILocation[];
}
interface SearchLocationsError {
  type: ActionType.LOAD_LOCATIONS_ERROR;
  payload: string;
}

export type Action =
  | SearchLocations
  | SearchLocationsSuccess
  | SearchLocationsError;
