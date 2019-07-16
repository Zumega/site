import React from 'react';
import './body.scss';
import Menu from '../menu';
import Sections from '../sections';

const Body = ({
                news
              }) => {

  return (
      <div>
        <Menu/>
        <Sections />
      </div>
  );
};

export default Body;
