export interface IsearchForm {
  location: string | undefined;
  checkin: string | undefined;
  checkout: string | undefined;
  guests: string | undefined;
}

export interface ILocation {
  id: string;
  name: string;
  picture_url: string;
  property_type: string;
  price: string;
  latitude: number;
  longitude: number;
  max_guests: number;
  bedrooms: number;
  review_scores_rating: number;
  number_of_reviews: number;
}

export interface ILocationsReducerState {
  locations: ILocation[];
  isLoading: boolean;
  error: string;
}
