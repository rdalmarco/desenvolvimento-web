package eso.desenvolvimentoweb.beans;

public class InicioBean {
    private String mensagem;

    public InicioBean() {
    }

    public InicioBean(String mensagem) {
        this.mensagem = mensagem;
    }

    public String getMensagem() {
        return this.mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }


    @Override
    public String toString() {
        return "{" +
            " mensagem='" + getMensagem() + "'" +
            "}";
    }

    
}
