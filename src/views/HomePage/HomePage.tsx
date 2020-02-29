import React, { Fragment } from 'react';

const HomePage: React.FC = () => {

  const handleClick = () => {
    rotateBody();
  };

  const rotateBody = () => {
    const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
    body.classList.add('rotate');
    setTimeout(() => {
      body.classList.remove('rotate');
    }, 1500);
  };

  return (
    <Fragment>
      <div className="mt-5">
        <div className="d-flex justify-content-center">
          <h1 className="title">
            Welcome to my portfolio <span role="img" aria-label="alien">👽</span>
          </h1>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="ml-xl-3">
              <p className="subtitle">Click for surprise
                <span role="img" aria-label="party"> 🎉</span>
              </p>
              <button className="surprise--button" onClick={handleClick}>
                Surprise
              </button>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <p className="subtitle">About me
              <span role="img" aria-label="technologist"> 👨🏼‍💻</span>
            </p>
            <p className="about-me-section">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt minima mollitia quibusdam
              voluptatum. Accusantium aut cumque enim esse libero maxime neque nesciunt nulla praesentium quas?
              Consectetur, consequuntur corporis cumque dignissimos eveniet ex illum ipsa itaque labore laudantium
              mollitia necessitatibus officia pariatur, perspiciatis quaerat qui ratione rem ullam! Esse, voluptas.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;