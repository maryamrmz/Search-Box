import React from 'react';

const CityItem = ({ city: { name } }) => {
  return (
    <div className='text-center'>
      <p>{name}</p>
    </div>
  );
};

export default CityItem;
