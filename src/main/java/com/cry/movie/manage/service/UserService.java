package com.cry.movie.manage.service;

import com.cry.movie.manage.data.LoginRequset;
import com.cry.movie.manage.entity.User;

public interface UserService {

    User getAllUsers(LoginRequset req);

    void AddUser(User user);

    int checkUser(User user);
}