import React from 'react';

export const About = () => {
  return (
    <div className='container'>
      <h1>About This App</h1>
      <p className='my-1'>Coding Academy Home Assignment</p>
      <p className='bg-dark p'>
        <span href='' className='brand-logo center'>
          {' '}
          All rights reserved Matan Shaviro &copy; 2020
        </span>
        <strong>Version: </strong>1.0.0
      </p>
    </div>
  );
};
