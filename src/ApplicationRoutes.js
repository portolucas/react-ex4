import React from "react";
import { Route } from "react-router-dom";
import { MoviesListView, MoviesIdView, FavoritesFilmsContainer  } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={MoviesListView} />
    <Route path="/movie/:id" exact component={MoviesIdView} />
    <Route path="/favorites" exact component={FavoritesFilmsContainer} />

  </>
);