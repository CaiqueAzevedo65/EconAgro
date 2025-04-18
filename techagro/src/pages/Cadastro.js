import React, { useState } from "react";
import "../Styles/Cadastro.css"; // Mantendo os estilos filtrados
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
      <div className="formulario shadow-lg">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h1 className="title">Cadastre-se</h1>
            <a id="logincadastro" href="/login">Entrar</a>
          </div>

          <div className="inputs">
            {["name", "lastname", "email", "number", "password", "cpassword"].map((field, index) => (
              <div className="input-box" key={index}>
                <label htmlFor={field}>
                  {field === "cpassword" ? "Confirmar Senha" : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  id={field}
                  type={field.includes("password") ? "password" : field === "email" ? "email" : "text"}
                  name={field}
                  className="form-control"
                  placeholder={`Digite seu ${field === "cpassword" ? "senha novamente" : field}`}
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <div className="gender-inputs">
            <h6>Gênero</h6>
            <div className="gender-group">
              {["Masculino", "Feminino", "Outros", "Prefiro não dizer"].map((gender, index) => (
                <div className="gender-input" key={index}>
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
            <button type="submit" className="btn btn-success w-100">Continuar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
