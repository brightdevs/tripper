import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { Action } from '../actions';
import { ActionType } from '../action-types';
export const loadLocations =
  (query: string) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOAD_LOCATIONS,
    });
    axios
      .get('https://brightdevs.github.io/api-data/api/locations.json')
      .then((response) => {
        console.log('response', response);
      })
      .catch((error: AxiosError) => {
        dispatch({
          type: ActionType.LOAD_LOCATIONS_ERROR,
          payload: error.message,
        });
      });
  };
