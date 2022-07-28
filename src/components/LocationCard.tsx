import React from 'react';
import { BsStarFill } from 'react-icons/bs';
type Props = {
  picture_url: string;
  name: string;
  property_type: string;
  bedrooms: number;
  max_guests: number;
  price: string;
  review_scores_rating: number;
  number_of_reviews: number;
};

const LocationCard = ({
  picture_url,
  name,
  property_type,
  bedrooms,
  max_guests,
  price,
  review_scores_rating,
  number_of_reviews,
}: Props) => {
  return (
    <div className='list-card '>
      <div className='list-card__img'>
        <img src={picture_url} alt='residence' />
      </div>
      <div className='list-card__content'>
        <div className='list-card__content__header-wrapper'>
          <div className='list-card__content-stars'>
            <BsStarFill className='icon' />
          </div>
          <span className='list-card__content-rating'>
            {review_scores_rating}
          </span>
          <span className='list-card__content-reviews'>
            ({number_of_reviews})
          </span>
        </div>
        <div className='list-card__content__main-wrapper'>
          <h4>{name}</h4>
          <p>{property_type}</p>
        </div>

        <div className='list-card__content__footer-wrapper'>
          <div className='list-card__content-bedrooms'>
            <span>
              {bedrooms} {bedrooms === 1 ? 'bedroom' : 'bedrooms'}{' '}
            </span>
          </div>
          <div className='list-card__content-guests'>
            <span>{max_guests}</span>
            <span>Guest</span>
          </div>
        </div>
      </div>
      <div className='list-card__price'>
        <div>
          <p>{price}</p>
          <small>Per Night</small>
        </div>
        <button>View</button>
      </div>
    </div>
  );
};

export default LocationCard;
