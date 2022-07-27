import React from 'react';
import { handleFormSubmit } from '../utils';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { BiMap } from 'react-icons/bi';
import { BsCalendarWeek } from 'react-icons/bs';
import SmartInput from '../components/SmartInput';
import { FiUsers } from 'react-icons/fi';
const Home = () => {
  const formRef = React.useRef<HTMLFormElement>(null);

  return (
    <Layout>
      <Header />
      <div className='main-wrapper'>
        <div className='locations'>
          <form
            ref={formRef}
            onSubmit={(e) => {
              handleFormSubmit(e, formRef);
            }}
            className='locations__search'
          >
            <SmartInput
              placeHolder='Location'
              label='Location'
              type='text'
              name='location'
            >
              <BiMap className='icon' />
            </SmartInput>
            <SmartInput placeHolder='' label='From' type='date' name='fromDate'>
              <BsCalendarWeek className='icon calendar' />
            </SmartInput>
            <SmartInput
              placeHolder='hello'
              label='To'
              type='date'
              name='toDate'
            >
              <BsCalendarWeek className='icon calendar' />
            </SmartInput>
            <SmartInput
              placeHolder='2 persons'
              label='Guest'
              type='number'
              name='persons'
            >
              <FiUsers className='icon' />
            </SmartInput>
            <div className='locations__search__btn'>
              <button type='submit' className='btn btn-info'>
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
