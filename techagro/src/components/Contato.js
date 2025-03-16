import React, { useState } from "react";
import MensagemEnviada from "./MensagemEnviada";
import '../Styles/Contato.css';

const Contato = () => {
  const [formEnviado, setFormEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validação em tempo real
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";

    if (!value.trim()) {
      error = "Este campo é obrigatório.";
    } else {
      if (name === "nome" && value.length < 3) {
        error = "O nome deve ter pelo menos 3 caracteres.";
      }
      if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Insira um e-mail válido.";
      }
      if (name === "mensagem" && value.length < 10) {
        error = "A mensagem deve ter pelo menos 10 caracteres.";
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (!formData[field].trim() || errors[field]) {
        valid = false;
      }
      newErrors[field] = errors[field] || (!formData[field].trim() ? "Este campo é obrigatório." : "");
    });

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setFormEnviado(true);
    }
  };

  if (formEnviado) {
    return <MensagemEnviada />;
  }

  return (
    <main className="container mx-auto mt-4 p-4">
      <section id="contato" className="mb-8">
        <br />
        <h2 id="ajuda" className="text-center text-success">Fale Conosco</h2>
        <p className="text-center mb-4">
          Estamos aqui para ajudar! Preencha o formulário abaixo e entraremos em contato.
        </p>

        <form id="contactForm" onSubmit={handleSubmit} noValidate>
          <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="nome" className="form-label">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="form-control"
                value={formData.nome}
                onChange={handleChange}
                required
              />
              {errors.nome && <small className="error-message text-danger">{errors.nome}</small>}
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <small className="error-message text-danger">{errors.email}</small>}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="mensagem" className="form-label">Mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              className="form-control"
              rows="4"
              value={formData.mensagem}
              onChange={handleChange}
              required
            ></textarea>
            {errors.mensagem && <small className="error-message text-danger">{errors.mensagem}</small>}
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success px-4 py-2 mt-3">
              Enviar
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contato;
