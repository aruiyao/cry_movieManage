package com.cry.movie.manage.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.cry.movie.manage.entity.Movie;

public interface MovieMapper {

    @Insert("insert into t_movie (name,picture,create_time,release_time,director,lead_role,type,screenwriter,film_length,alias,synopsis) values (#{name},#{picture},#{createTime},#{releaseTime},#{director},#{leadRole},#{type},#{screenwriter},#{filmLength},#{alias},#{synopsis})")
    public void addMovie(Movie movie);
    
    
    @Select({
        "<script>",
        "select * from t_movie where 1=1",
        "<if test='id!=null and id!=\"\"'>",
        "and id=#{id}",
        "</if>",
        "<if test='name!=null and name!=\"\"'>",
        "and name like CONCAT(CONCAT('%', #{name}), '%')",
        "</if>",
        "<if test='type!=null and type!=\"\"'>",
        "and type=#{type}",
        "</if>",
        "order by create_time desc",
        "</script>" 
    })
    public List<Movie> queryMovieByCond(Movie movie);
    
    @Update({"<script>",
        "update t_movie",
        "<set>",
            "name=#{name},picture=#{picture},create_time=#{createTime},release_time=#{releaseTime},director=#{director},lead_role=#{leadRole},type=#{type},screenwriter=#{screenwriter},film_length=#{filmLength},alias=#{alias},synopsis=#{synopsis}",        
        "</set>",
        "where id=#{id}",
        "</script>" 
    })
    public void updateMovie(Movie movie);
    
    @Delete("delete from t_movie where id=#{0}")
    public void deleteMovie(Integer id);
    
}
