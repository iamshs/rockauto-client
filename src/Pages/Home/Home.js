import React from 'react';
import Background from './Background';
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
        </div>
    );
};

export default Home;