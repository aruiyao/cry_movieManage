package com.cry.movie.manage.service;

import java.util.List;

import com.cry.movie.manage.entity.Movie;

public interface MovieService {

    void addMovie(Movie movie);

    List < Movie > queryMovieByCond(Movie movie);
    
    void updateMovie(Movie movie);
    
    void deleteMovie(Integer id);

}