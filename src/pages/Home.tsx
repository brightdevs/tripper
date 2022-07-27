import React from 'react';
import { handleChange, handleFormSubmit } from '../utils';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { BiMap } from 'react-icons/bi';
import SmartInput from '../components/SmartInput';
import { FiUsers } from 'react-icons/fi';
import { IsearchForm } from '../interfaces';
import { useActions } from '../hooks/useActions';

const Home = () => {
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
                // onClick={(e) => {
                //   e.preventDefault();
                //   //   handleFormSubmit(searchForm, setSearchForm);
                //   setSearchForm({
                //     location: '',
                //     checkin: '',
                //     checkout: '',
                //     guests: '',
                //   } as IsearchForm);
                // }}
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

          <h1>locations</h1>
        </div>
        <div className='map'>
          <h1>map</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
