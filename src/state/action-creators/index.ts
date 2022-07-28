import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { Action } from '../actions';
import { ActionType } from '../action-types';
import { ILocation } from '../../interfaces';
export const loadLocations =
  (query: string) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOAD_LOCATIONS,
    });
    axios
      .get('https://brightdevs.github.io/api-data/api/locations.json')
      .then((response) => {
        console.log('response', response);
        const locations: ILocation[] = response.data.map((result: any) => {
          return {
            id: result.id,
            name: result.name,
            picture_url: result.picture_url,
            property_type: result.property_type,
            price: result.price,
            latitude: result.latitude,
            longitude: result.longitude,
            max_guests: result.bedrooms * 2,
            bedrooms: result.bedrooms,
            review_scores_rating: result.review_scores_rating,
            number_of_reviews: result.number_of_reviews,
          };
        });
        console.log('locations', locations);
        dispatch({
          type: ActionType.LOAD_LOCATIONS_SUCCESS,
          payload: locations,
        });
      })
      .catch((error: AxiosError) => {
        dispatch({
          type: ActionType.LOAD_LOCATIONS_ERROR,
          payload: error.message,
        });
      });
  };
