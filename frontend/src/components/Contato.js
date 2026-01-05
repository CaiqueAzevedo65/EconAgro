import React, { useState } from "react";
import MensagemEnviada from "./MensagemEnviada";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
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
    <Container className="py-5 contato-page">
      <Row className="justify-content-center">
        <Col lg={8} xl={7}>
          <Card className="shadow-lg border-0 rounded-lg">
            <Card.Body className="p-5">
              <div className="text-center mb-5">
                <div className="icon-wrapper mb-3 text-success">
                  <FontAwesomeIcon icon={faEnvelope} size="3x" />
                </div>
                <h2 className="fw-bold text-dark">Fale Conosco</h2>
                <p className="text-muted">
                  Estamos aqui para ajudar! Preencha o formulário abaixo e entraremos em contato.
                </p>
              </div>

              <Form onSubmit={handleSubmit} noValidate>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="nome">
                      <Form.Label className="fw-bold">Nome</Form.Label>
                      <Form.Control
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        isInvalid={!!errors.nome}
                        className="form-input-custom"
                        placeholder="Seu nome completo"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.nome}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="email">
                      <Form.Label className="fw-bold">Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        className="form-input-custom"
                        placeholder="seu@email.com"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4" controlId="mensagem">
                  <Form.Label className="fw-bold">Mensagem</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    isInvalid={!!errors.mensagem}
                    className="form-input-custom"
                    placeholder="Como podemos ajudar?"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.mensagem}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid">
                  <Button 
                    type="submit" 
                    variant="success" 
                    size="lg"
                    className="custom-btn-primary fw-bold"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                    Enviar Mensagem
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contato;
