package eso.desenvolvimentoweb.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import eso.desenvolvimentoweb.model.UsuarioModel;
import eso.desenvolvimentoweb.repository.UsuarioRepository;
import jakarta.validation.Valid;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class UsuarioController {
    private UsuarioRepository usuarioRepository;

    public UsuarioController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @GetMapping(value = "users")
    public List<UsuarioModel> allUsers() {
        return usuarioRepository.findAll();
    }

    @PostMapping("/users")
    public ResponseEntity<UsuarioModel> createUser(@Valid @RequestBody UsuarioModel user) {
        UsuarioModel savedUser = usuarioRepository.save(user);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedUser.getId())
                .toUri();
        return ResponseEntity.created(location).build();

    }
}
