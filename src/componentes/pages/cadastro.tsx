import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Cadastre-se</h3>
                <div className="form-gp-cad">
                    <label>Nome</label>
                    <input type="text" className="textbox" placeholder="Nome" />
                </div>
                <div className="form-gp-cad">
                    <label>Sobrenome</label>
                    <input type="text" className="textbox" placeholder="Sobrenome" />
                </div>
                <div className="form-gp-cad">
                    <label>Endereço do Email</label>
                    <input type="email" className="textbox" placeholder="Endereço do Email" />
                </div>
                <div className="form-gp-cad">
                    <label>Senha</label>
                    <input type="password" className="textbox" placeholder="Digite a Senha" />
                </div>
                <div className="form-gp-cad">
                    <label>Confirme Senha</label>
                    <input type="password" className="textbox" placeholder="Digite a Senha" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Cadastrar</button>
                <p className="forgot-password text-right">
                    Já é registrado <a href="/sign-in">faça o login?</a>
                </p>
            </form>
        );
    }
}