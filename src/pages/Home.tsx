import Layout from '../components/Layout';
import Header from '../components/Header';
import { BiMap } from 'react-icons/bi';
import SmartInput from '../components/SmartInput';
const Home = () => {
  return (
    <Layout>
      <Header />
      <div className='main-wrapper'>
        <div className='locations'>
          <div className='locations__search'>
            <SmartInput placeHolder='Location' label='Location'>
              <BiMap className='icon' />
            </SmartInput>
            {/* </div> */}
            <div className='section'>
              <input type='text' />
            </div>
            <div className='section'>
              <input type='text' />
            </div>
            <div className='section'>
              <input type='text' />
            </div>
            {/* <div className='locations__search-locations'>
              <div className='section-wrapper'>
                <BiMap className='locations__search-locations__icon' />
                <div className='input-wrapper'>
                  <span className='label'>Location</span>
                  <input type='text' placeholder='Moncton, NB' />
                </div>
              </div>
            </div> */}
            {/* <div className='locations__search-date'>
              <input type='text' placeholder='Tuesday 4' />
            </div>
            <div className='locations__search-date'>
              <input type='text' placeholder='Friday 6' />
            </div>
            <div className='locations__search-guest'>
              <input type='text' placeholder='2 Rooms' />
            </div> */}
          </div>
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
