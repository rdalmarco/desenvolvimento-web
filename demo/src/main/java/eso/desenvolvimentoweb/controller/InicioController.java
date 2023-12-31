package eso.desenvolvimentoweb.controller;

import eso.desenvolvimentoweb.bean.InicioBean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class InicioController {

    @GetMapping("/inicio")
    public String inicio(@RequestParam(value = "name", defaultValue = "World") String name){
        return String.format("olá %s!", name);
    }

    @GetMapping("/bean")
    public InicioBean bean(){
        return new InicioBean("Olá Mundo");
    }

}

