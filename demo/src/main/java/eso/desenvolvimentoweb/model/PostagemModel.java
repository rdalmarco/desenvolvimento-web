package eso.desenvolvimentoweb.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity(name="postagem")
@Table(schema = "public")
@Data
public class PostagemModel {

    @Id
    @GeneratedValue
    private Long poscodigo;

    private String mensagem;
    @ManyToOne(fetch = FetchType.LAZY) //Fetch Lazy = Só carrega os dados quando fizer a requisição dos mesmos.
    @JsonIgnore //Usado para não precisar passar todas as informações do usuário, somnete o ID.
    private UsuarioModel usuarioModel; //Define que uma postagem tem um usuário.

}
