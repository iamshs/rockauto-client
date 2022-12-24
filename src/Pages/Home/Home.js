import React from 'react';
import Background from './Background';
import Order from './Order';
import Parts from './Parts';
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
        </div>
    );
};

export default Home;