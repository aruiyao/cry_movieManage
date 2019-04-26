package com.cry.movie.manage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cry.movie.manage.data.QueryMovieListResp;
import com.cry.movie.manage.entity.Movie;
import com.cry.movie.manage.service.MovieService;

@Controller
public class MovieController {
    @Autowired
    private MovieService movieService;

    @PostMapping(value = "/addMovie")
    @ResponseBody
    public void addMovie(@RequestBody Movie movie) {
        movieService.addMovie(movie);
    }
    
    @GetMapping(value = "/queryMovieByCond")
    @ResponseBody
    public QueryMovieListResp queryMovieByCond(Movie movie) {
        QueryMovieListResp rsp = new QueryMovieListResp();
        List < Movie > movieList = movieService.queryMovieByCond(movie);
        rsp.setMovieList(movieList);
        return rsp;
    }

    @PostMapping(value = "/updateMovie")
    @ResponseBody
    public void updateMovie(@RequestBody Movie movie) {
        movieService.updateMovie(movie);
    }
    
    @PostMapping(value = "/deleteMovie")
    @ResponseBody
    public void deleteMovie(@RequestBody Integer id) {
        movieService.deleteMovie(id);
    }
}
