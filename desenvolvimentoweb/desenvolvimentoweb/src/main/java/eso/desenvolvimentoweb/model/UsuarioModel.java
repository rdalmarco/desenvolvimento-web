package eso.desenvolvimentoweb.model;

import org.springframework.validation.annotation.Validated;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;

//@Data -Importar lombock
@Entity(name="user_details")
@Table(schema = "public")
public class UsuarioModel {

    @Id
    @GeneratedValue
    private Integer id;

    @Size(min = 3, max = 5, message = "Deve possuir 3 letras")
    private String nome;


    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }




}