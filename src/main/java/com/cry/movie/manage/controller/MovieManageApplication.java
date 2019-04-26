package com.cry.movie.manage.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@EnableAutoConfiguration
@ComponentScan(value = { "com.cry.movie.manage.controller", "com.cry.movie.manage.service.impl" })
@MapperScan(value = "com.cry.movie.manage.mapper")
public class MovieManageApplication {
	public static void main(String[] args) {
		SpringApplication.run(MovieManageApplication.class, args);
	}
}
