import Layout from '../components/Layout';

import React from 'react';
import { BsHouse, BsHeart, BsBell } from 'react-icons/bs';
type Props = {};

const Home = (props: Props) => {
  return (
    <Layout>
      <header className='navigation'>
        <div className='navigation__brand'>
          <BsHouse className='navigation__brand__icon' />
          <span className='navigation__brand__name'>tripper</span>
        </div>
        <div className='navigation__nav'>
          <ul>
            <li>
              <a href='none'>Accomodations</a>
            </li>
            <li>
              <a href='nond'>Car rentals</a>
            </li>
            <li>
              <a href='nond'>Flights</a>
            </li>
          </ul>
        </div>
        <div className='navigation__info'>
          <BsHeart className='navigation__info__icon' />
          <BsBell className='navigation__info__icon' />
          <img
            src='https://avatars.githubusercontent.com/u/109676581?v=4'
            alt='profile'
            className='navigation__info__profile'
          />
        </div>
      </header>
    </Layout>
  );
};

export default Home;
