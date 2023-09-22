package eso.desenvolvimentoweb.repository;

import eso.desenvolvimentoweb.model.PostagemModel;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PostagemRepository extends JpaRepository<PostagemModel, Long> {


}
