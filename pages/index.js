import React from 'react';

import {client} from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({products, bannerData}) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className='about-container'>
        <div className='about'>
          <div className='inner-section'>
            <h1>About Us</h1>
            <p className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit
               esse cillum dolore eu fugiat nulla pariatur. 
               
            </p>
            
          </div>
        </div>
      </div>
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Earrings:</p>
      </div>

      <div className='products-container' id='products'>
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </div>
  );
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return{
    props: { products, bannerData }
  }
}

export default Home;