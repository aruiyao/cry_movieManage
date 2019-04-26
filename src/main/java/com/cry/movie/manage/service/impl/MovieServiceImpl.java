package com.cry.movie.manage.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cry.movie.manage.entity.Movie;
import com.cry.movie.manage.mapper.MovieMapper;
import com.cry.movie.manage.service.MovieService;

@Service
public class MovieServiceImpl implements MovieService {
    @Autowired
    private MovieMapper movieMapper;

    @Override
    public void addMovie(Movie movie) {
        movieMapper.addMovie(movie);
    }

    @Override
    public List < Movie > queryMovieByCond(Movie movie) {
        return movieMapper.queryMovieByCond(movie);
    }

    @Override
    public void updateMovie(Movie movie) {
        movieMapper.updateMovie(movie);
    }

    @Override
    public void deleteMovie(Integer id) {
        movieMapper.deleteMovie(id);
    }

}
