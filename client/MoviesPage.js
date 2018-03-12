import React from 'react';
import {MoviesAppContainer} from './movies/Movies';
import './MoviesPage.less';

/**
 * HOMEPAGE COMPONENT (PRESENTATION)
 *
 * @return {Dom} home page dom element
 */
const MoviesPage = () => {
  return (
    <div>
      MoviesPage
      <MoviesAppContainer />
    </div>
  );
};

export default MoviesPage;
