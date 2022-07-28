import React from 'react';
import { handleChange, handleFormSubmit } from '../utils';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { BiMap } from 'react-icons/bi';
import SmartInput from '../components/SmartInput';
import { FiUsers } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';
import { IsearchForm } from '../interfaces';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
const Home = () => {
  const { locations, isLoading } = useTypedSelector((state) => state.locations);

  const { loadLocations } = useActions();
  const [searchForm, setSearchForm] = React.useState<IsearchForm>({
    location: '',
    checkin: '',
    checkout: '',
    guests: '',
  });

  const onSubmtForm = () => {
    loadLocations('hello');
  };

  return (
    <Layout>
      <Header />
      <div className='main-wrapper'>
        <div className='locations'>
          <form
            className='locations__search'
            onSubmit={(e) => {
              handleFormSubmit(e, searchForm, setSearchForm);
              onSubmtForm();
            }}
          >
            <SmartInput
              placeHolder='Location'
              label='Location'
              type='text'
              children={<BiMap className='icon' />}
              ommitIcon={false}
              handleChange={handleChange}
              setSearchForm={setSearchForm}
              value={searchForm?.location!}
              name='location'
            />
            <SmartInput
              placeHolder='Check in'
              label='Check in'
              type='date'
              ommitIcon={true}
              handleChange={handleChange}
              setSearchForm={setSearchForm}
              value={searchForm?.checkin!}
              name='checkin'
            />
            <SmartInput
              placeHolder='Check out'
              label='Check out'
              type='date'
              ommitIcon={true}
              handleChange={handleChange}
              setSearchForm={setSearchForm}
              value={searchForm?.checkout!}
              name='checkout'
            />
            <SmartInput
              placeHolder='Guests'
              label='Guests'
              type='number'
              ommitIcon={false}
              children={<FiUsers className='icon' />}
              handleChange={handleChange}
              setSearchForm={setSearchForm}
              value={searchForm?.guests!}
              name='guests'
            />
            <div className='locations__search__btn'>
              <button
                disabled={
                  !searchForm.location ||
                  !searchForm.checkin ||
                  !searchForm.checkout ||
                  !searchForm.guests
                }
                type='submit'
                className={`btn btn-info ${
                  !searchForm.location ||
                  !searchForm.checkin ||
                  !searchForm.checkout ||
                  !searchForm.guests
                    ? 'disabled'
                    : ''
                }`}
              >
                Search
              </button>
            </div>
          </form>
          <div className='locations__list'>
            <h1>locations display</h1>
            <ul>
              {isLoading ? (
                <li>Loading...</li>
              ) : (
                locations.slice(0, 10).map((location, index) => (
                  <div key={index} className='list-card '>
                    <div className='list-card__img'>
                      <img src={location.picture_url} alt='residence' />
                    </div>
                    <div className='list-card__content'>
                      <div className='list-card__content__header-wrapper'>
                        <div className='list-card__content-stars'>
                          <BsStarFill className='icon' />
                        </div>
                        <span className='list-card__content-rating'>
                          {location.review_scores_rating}
                        </span>
                        <span className='list-card__content-reviews'>
                          ({location.number_of_reviews})
                        </span>
                      </div>
                      <div className='list-card__content__main-wrapper'>
                        <h4>{location.name}</h4>
                        <p>{location.property_type}</p>
                      </div>

                      <div className='list-card__content__footer-wrapper'>
                        <div className='list-card__content-bedrooms'>
                          <span>
                            {location.bedrooms}{' '}
                            {location.bedrooms === 1 ? 'bedroom' : 'bedrooms'}{' '}
                          </span>
                        </div>
                        <div className='list-card__content-guests'>
                          <span>{location.max_guests}</span>
                          <span>Guest</span>
                        </div>
                      </div>
                    </div>
                    <div className='list-card__price'>
                      <div>
                        <p>{location.price}</p>
                        <small>Per Night</small>
                      </div>
                      <button>View</button>
                    </div>
                  </div>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className='map'>
          <h1>map</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
