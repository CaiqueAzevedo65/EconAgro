import React, { useState } from "react"; // Importa React e o hook useState
import MensagemEnviada from "./MensagemEnviada"; // Importa o componente MensagemEnviada para exibir após o envio
import '../Styles/Contato.css'; // Importa o arquivo de estilos CSS específico para a página de contato

// Componente Contato que renderiza o formulário de contato
const Contato = () => {
  // Estado para controlar se o formulário foi enviado
  const [formEnviado, setFormEnviado] = useState(false);
  
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  
  // Estado para armazenar os erros de validação de cada campo
  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });


  // Função chamada sempre que um campo do formulário é alterado
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validação em tempo real
    validateField(name, value);
  };

  // Função que valida cada campo individualmente
  const validateField = (name, value) => {
    let error = "";

    // Valida se o campo está vazio
    if (!value.trim()) {
      error = "Este campo é obrigatório.";
    } else {
      // Validação do nome (pelo menos 3 caracteres)
      if (name === "nome" && value.length < 3) {
        error = "O nome deve ter pelo menos 3 caracteres.";
      }
      // Validação do e-mail (formato válido)
      if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Insira um e-mail válido.";
      }
      // Validação da mensagem (pelo menos 10 caracteres)
      if (name === "mensagem" && value.length < 10) {
        error = "A mensagem deve ter pelo menos 10 caracteres.";
      }
    }
    
    // Atualiza os erros de validação
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Função para validar o formulário completo
  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    // Valida todos os campos do formulário
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (!formData[field].trim() || errors[field]) {
        valid = false; // Se algum campo for inválido, o formulário não é válido
      }
      newErrors[field] = errors[field] || (!formData[field].trim() ? "Este campo é obrigatório." : "");
    });

    setErrors(newErrors); // Atualiza os erros
    return valid; // Retorna se o formulário é válido ou não
  };

  // Função chamada ao enviar o formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    if (validateForm()) { // Se o formulário for válido, marca como enviado
      setFormEnviado(true);
    }
  };

  // Se o formulário foi enviado, renderiza a tela de mensagem enviada
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

export default Contato; // Exporta o componente Contato
