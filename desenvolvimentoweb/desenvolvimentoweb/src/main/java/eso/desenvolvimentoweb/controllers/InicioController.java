package eso.desenvolvimentoweb.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InicioController {

    @GetMapping("/inicio")
    public String inicio(){
        return "inicio";
    }

    
    
}
