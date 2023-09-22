package eso.desenvolvimentoweb.controller;

import eso.desenvolvimentoweb.model.PostagemModel;
import eso.desenvolvimentoweb.model.UsuarioModel;
import eso.desenvolvimentoweb.repository.PostagemRepository;
import eso.desenvolvimentoweb.repository.UsuarioRepository;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
public class UsuarioController {
    private UsuarioRepository usuarioRepository;
    private PostagemRepository postagemRepository;

    public UsuarioController(UsuarioRepository usuarioRepository, PostagemRepository postagemRepository) {
        this.usuarioRepository = usuarioRepository;
        this.postagemRepository = postagemRepository;
    }

    @GetMapping(value = "users")
    public List<UsuarioModel> allUsers() {
        return usuarioRepository.findAll();
    }

    @GetMapping("/users/{id}/posts")
    public List<PostagemModel> listarPostagensDeUsuario(@PathVariable int id){
        Optional<UsuarioModel> usuario = usuarioRepository.findById(id);
        return usuario.get().getPostagens(); //.get.getPostagens garante que se o usuário não
        //tiver nenhuma postagem, ele já vai pegar no get() e não vai estourar exception.
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

    @PostMapping("users/{id}/posts") //@Valid, valida o tamanho da postagem
    //RequestBody = corpo da requisição HTTP, ele vai salvar o corpo no objeto PostagemModel post declarado.
    public ResponseEntity<PostagemModel> createPostagem(@PathVariable int id,
                                                        @Valid @RequestBody PostagemModel post) {
       Optional<UsuarioModel> usuario = usuarioRepository.findById(id);
       post.setUsuarioModel(usuario.get()); //.get() valida se é nulo ou não.
       PostagemModel postSalva =  postagemRepository.save(post);
       //postagem salva é usado para guardar o id da postagem que salvamos, vamos usar para retornar.
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(postSalva.getPoscodigo())
                .toUri();
        return ResponseEntity.created(location).build();
        //Aqui vou retornar o corpo da requisição montado com o id do novo objeto salvo.
    }
}
