import React, { useState } from "react";
import "../Styles/Login.css"; // Importação do CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Login() {
  // Definir os estados para email, senha e mensagens de erro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Função para validar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar se o email está preenchido e é válido
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    // Validar se a senha está preenchida
    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  return (
    <div className="bform">
      <div className="lformulario">
        <form id="lform" className="lform" onSubmit={handleSubmit}>
          <div className="form-header">
            <div className="title">
              <h1>Login</h1>
            </div>
          </div>

          <div className="linputs">
            <div className="linput-box">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
              />
              {emailError && (
                <>
                  <FontAwesomeIcon icon={faExclamationCircle} className="error-icon" />
                  <small>E-mail inválido</small>
                </>
              )}
            </div>

            <div className="linput-box">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
              />
              {passwordError && (
                <>
                  <FontAwesomeIcon icon={faExclamationCircle} className="error-icon" />
                  <small>Senha incorreta</small>
                </>
              )}
            </div>
          </div>

          <div className="continue-button">
            <button id="continue-btn" type="submit">Continuar</button>
          </div>

          <div className="cadastro-button">
            <Link to="/cadastro" style={{ textDecoration: 'none', width: '100%' }}>
              <button id="cadastro-btn" type="button">Criar conta</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
