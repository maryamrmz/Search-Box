import React from 'react';
import CityItem from './CityItem';

const Cities = ({ cities, isLoading }) => {
  console.log({ cities });
  return (
    <div className='container'>
      <ul className='text-center'>
        {!isLoading &&
          cities.map((city) => <CityItem key='city.id' city={city} />)}
      </ul>
    </div>
  );
};

export default Cities;
