import React from 'react';
import {
  MoviesAppContainer,
  SearchContainer,
  PaginationContainer,
} from './movies/Movies';
import './MoviesPage.less';

/**
 * HOMEPAGE COMPONENT (PRESENTATION)
 *
 * @return {Dom} home page dom element
 */
const MoviesPage = () => {
  return (
    <div className="movies-page">
      <PaginationContainer />
      <SearchContainer />
      <MoviesAppContainer />
    </div>
  );
};

export default MoviesPage;
