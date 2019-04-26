package com.cry.movie.manage.data;

import java.util.List;

import com.cry.movie.manage.entity.Movie;

public class QueryMovieListResp {
    private List < Movie > movieList;

    public List < Movie > getMovieList() {
        return movieList;
    }

    public void setMovieList(List < Movie > movieList) {
        this.movieList = movieList;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("QueryMovieListResp [movieList=");
        builder.append(movieList);
        builder.append("]");
        return builder.toString();
    }
}
