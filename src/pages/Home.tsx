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
            <SmartInput placeHolder='Location' label='Location'>
              <BiMap className='icon' />
            </SmartInput>
            <SmartInput placeHolder='Location' label='Location'>
              <BiMap className='icon' />
            </SmartInput>
            <SmartInput placeHolder='Location' label='Location'>
              <BiMap className='icon' />
            </SmartInput>
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
