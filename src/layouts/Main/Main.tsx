import React, { Fragment } from 'react';
import { Nav } from '.';

const Main: React.FC = ({children}) => {

  return (
    <Fragment>
      <Nav/>
      <main>
        { children }
      </main>
    </Fragment>
  );
};

export default Main;
