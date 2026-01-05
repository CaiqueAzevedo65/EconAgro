import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let isValid = true;

    // Validar email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    // Validar senha
    if (!password) {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    if (isValid) {
      // Simulação de login bem sucedido
      navigate('/');
    }
  };

  return (
    <div className="login-page">
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <Card className="login-card shadow-lg">
          <Card.Body className="p-5">
            <div className="text-center mb-4">
              <h1 className="fw-bold text-dark">Login</h1>
              <p className="text-muted">Bem-vindo de volta!</p>
            </div>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label className="fw-bold">E-mail</Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={emailError}
                    className="form-input-custom"
                  />
                  {emailError && (
                    <div className="invalid-feedback d-block d-flex align-items-center mt-1">
                      <FontAwesomeIcon icon={faExclamationCircle} className="me-1" />
                      E-mail inválido
                    </div>
                  )}
                </div>
              </Form.Group>

              <Form.Group className="mb-4" controlId="password">
                <Form.Label className="fw-bold">Senha</Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={passwordError}
                    className="form-input-custom"
                  />
                  {passwordError && (
                    <div className="invalid-feedback d-block d-flex align-items-center mt-1">
                      <FontAwesomeIcon icon={faExclamationCircle} className="me-1" />
                      Senha incorreta
                    </div>
                  )}
                </div>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3 btn-lg fw-bold text-white custom-btn-primary">
                Continuar
              </Button>

              <Link to="/cadastro" className="text-decoration-none">
                <Button variant="outline-success" type="button" className="w-100 fw-bold custom-btn-outline">
                  Criar conta
                </Button>
              </Link>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Login;
