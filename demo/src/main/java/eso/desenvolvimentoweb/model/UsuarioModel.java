package eso.desenvolvimentoweb.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import javax.validation.constraints.Size;
import java.util.List;

@Data //-Importar lombock, disponibiliza métodos de get e set.
@Entity(name="user_details")
@Table(schema = "public")
public class UsuarioModel {

    @Id
    @GeneratedValue
    private Integer id;

    @Size(min = 3, max = 5, message = "Deve possuir 3 letras")
    private String nome;

    @OneToMany(mappedBy = "usuarioModel") //mapeando o relacionamento com postagens "contrareferencia"
    //ele mapeia a partir do nome do atributo definido na fk (na outra classe do relacionamento).
    @JsonIgnore
    private List<PostagemModel> postagens; //um usuário possui uma lista de postagens.





}