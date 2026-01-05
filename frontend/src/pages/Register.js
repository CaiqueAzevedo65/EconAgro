import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../Styles/Cadastro.css";

const Cadastro = () => {
  const navigate = useNavigate();
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
    // Aqui você adicionaria a lógica de integração com a API
    navigate('/login');
  };

  return (
    <div className="register-page">
      <Container className="d-flex justify-content-center py-5">
        <Card className="register-card shadow-lg">
          <Card.Body className="p-4 p-md-5">
            <div className="text-center mb-4">
              <h1 className="fw-bold text-dark">Cadastre-se</h1>
              <p>
                Já tem uma conta?{" "}
                <Link to="/login" className="text-success fw-bold text-decoration-none">
                  Faça login
                </Link>
              </p>
            </div>

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="name">
                    <Form.Label className="fw-bold">Nome</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input-custom"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="lastname">
                    <Form.Label className="fw-bold">Sobrenome</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastname"
                      placeholder="Digite seu sobrenome"
                      value={formData.lastname}
                      onChange={handleChange}
                      required
                      className="form-input-custom"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="email">
                    <Form.Label className="fw-bold">E-mail</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Digite seu e-mail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input-custom"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="number">
                    <Form.Label className="fw-bold">Telefone</Form.Label>
                    <Form.Control
                      type="tel"
                      name="number"
                      placeholder="Digite seu telefone"
                      value={formData.number}
                      onChange={handleChange}
                      className="form-input-custom"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="password">
                    <Form.Label className="fw-bold">Senha</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Digite sua senha"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="form-input-custom"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="cpassword">
                    <Form.Label className="fw-bold">Confirmar Senha</Form.Label>
                    <Form.Control
                      type="password"
                      name="cpassword"
                      placeholder="Confirme sua senha"
                      value={formData.cpassword}
                      onChange={handleChange}
                      required
                      className="form-input-custom"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label className="fw-bold d-block">Gênero:</Form.Label>
                <div className="d-flex flex-wrap gap-3">
                  {["Masculino", "Feminino", "Outros", "Prefiro não dizer"].map((gender) => (
                    <Form.Check
                      key={gender}
                      type="radio"
                      id={`gender-${gender}`}
                      label={gender}
                      name="gender"
                      value={gender}
                      onChange={handleChange}
                      checked={formData.gender === gender}
                      className="custom-radio"
                    />
                  ))}
                </div>
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 btn-lg fw-bold text-white custom-btn-primary"
              >
                Continuar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Cadastro;
