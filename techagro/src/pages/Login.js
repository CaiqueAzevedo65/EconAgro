import React from "react";
import "../Styles/Login.css"; // Importação do CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <div className="bform">
      <div className="lformulario">
        <form id="lform" className="lform">
          <div className="form-header">
            <div className="title">
              <h1>Login</h1>
            </div>
          </div>

          <div className="linputs">
            <div className="linput-box">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" name="email" placeholder="Digite seu e-mail" />
              <FontAwesomeIcon icon={faExclamationCircle} className="error-icon" />
              <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
              <small>Mensagem de erro</small>
            </div>

            <div className="linput-box">
              <label htmlFor="password">Senha</label>
              <input id="password" type="password" name="password" placeholder="Digite sua senha" />
              <FontAwesomeIcon icon={faExclamationCircle} className="error-icon" />
              <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
              <small>Mensagem de erro</small>
            </div>
          </div>

          <div className="continue-button">
            <button id="continue-btn" type="button">Continuar</button>
          </div>

          <div className="cadastro-button">
            <button id="cadastro-btn" type="button">Criar conta</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
