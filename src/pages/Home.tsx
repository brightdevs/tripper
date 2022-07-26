import Layout from '../components/Layout';

import React from 'react';
import { BsHouse } from 'react-icons/bs';
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
          <span>nav</span>
        </div>
        <div className='navigation__info'>
          <span>info</span>
        </div>
      </header>
    </Layout>
  );
};

export default Home;
