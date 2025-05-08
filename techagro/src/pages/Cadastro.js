import React, { useState } from "react";
import "../Styles/Cadastro.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    number: "",
    password: "",
    cpassword: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
  };

  return (
    <div className="bform">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-header">
            <h1>Cadastre-se</h1>
            <a id="logincadastro" href="/login">Já tem uma conta? Faça login</a>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Sobrenome</label>
              <input
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Digite seu sobrenome"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Telefone</label>
              <input
                id="number"
                type="tel"
                name="number"
                placeholder="Digite seu telefone"
                value={formData.number}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Digite sua senha"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cpassword">Confirmar Senha</label>
              <input
                id="cpassword"
                type="password"
                name="cpassword"
                placeholder="Confirme sua senha"
                value={formData.cpassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="gender-group">
            <label>Gênero:</label>
            <div className="gender-options">
              {["Masculino", "Feminino", "Outros", "Prefiro não dizer"].map((gender, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={gender.toLowerCase()}
                    name="gender"
                    value={gender}
                    onChange={handleChange}
                  />
                  <label htmlFor={gender.toLowerCase()}>{gender}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="continue-button">
            <button type="submit">Continuar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
