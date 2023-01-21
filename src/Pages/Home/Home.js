import React from 'react';
import Footer from '../Shared/Footer';
import Background from './Background';
import Order from './Order';
import Parts from './Parts';
import Reviews from './Reviews';
import Service from './Service';
import Stat from './Stat';

const Home = () => {
    return (
        <div>
         <Background />   
         <Service />
         <Parts />
         <Stat />
         <Order />
         <Reviews />
         <Footer />
        </div>
    );
};

export default Home;