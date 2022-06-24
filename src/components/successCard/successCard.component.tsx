import React from 'react';

import './successCard.component.styles.scss';

const SuccessCard = () => {
  return (
    <div className='d-flex'>
      <div className='success-icon'>
        <div className='success-icon__tip'></div>
        <div className='success-icon__long'></div>
      </div>
    </div>
  );
};

export default SuccessCard;
