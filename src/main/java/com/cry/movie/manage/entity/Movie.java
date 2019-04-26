package com.cry.movie.manage.entity;

public class Movie {
    /**影片ID*/
    private Integer id;

    /**影片名称*/
    private String name;

    /**影片主图*/
    private String picture;

    /**上映时间*/
    private String releaseTime;

    /**影片评分*/
    private Double score;

    /**导演*/
    private String director;

    /**主演*/
    private String leadRole;

    /**类型*/
    private Integer type;

    /**编剧*/
    private String screenwriter;

    /**片长*/
    private String filmLength;

    /**别名*/
    private String alias;

    /**简介*/
    private String synopsis;

    private String createTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getReleaseTime() {
        return releaseTime;
    }

    public void setReleaseTime(String releaseTime) {
        this.releaseTime = releaseTime;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getLeadRole() {
        return leadRole;
    }

    public void setLeadRole(String leadRole) {
        this.leadRole = leadRole;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getScreenwriter() {
        return screenwriter;
    }

    public void setScreenwriter(String screenwriter) {
        this.screenwriter = screenwriter;
    }

    public String getFilmLength() {
        return filmLength;
    }

    public void setFilmLength(String filmLength) {
        this.filmLength = filmLength;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("Movie [id=");
        builder.append(id);
        builder.append(", name=");
        builder.append(name);
        builder.append(", picture=");
        builder.append(picture);
        builder.append(", releaseTime=");
        builder.append(releaseTime);
        builder.append(", score=");
        builder.append(score);
        builder.append(", director=");
        builder.append(director);
        builder.append(", leadRole=");
        builder.append(leadRole);
        builder.append(", type=");
        builder.append(type);
        builder.append(", screenwriter=");
        builder.append(screenwriter);
        builder.append(", filmLength=");
        builder.append(filmLength);
        builder.append(", alias=");
        builder.append(alias);
        builder.append(", synopsis=");
        builder.append(synopsis);
        builder.append(", createTime=");
        builder.append(createTime);
        builder.append("]");
        return builder.toString();
    }

}
