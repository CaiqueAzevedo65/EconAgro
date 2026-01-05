import React from "react";
import { Container, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../Styles/MensagemEnviada.css';

const MensagemEnviada = () => {
  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: '60vh' }}>
      <Card className="text-center shadow-lg border-0 p-5" style={{ maxWidth: '500px', width: '100%' }}>
        <Card.Body>
          <div className="mb-4 text-success">
            <FontAwesomeIcon icon={faCheckCircle} size="4x" />
          </div>
          <h2 className="fw-bold mb-3 text-dark">Mensagem Enviada!</h2>
          <p className="text-muted mb-4">
            Obrigado pelo seu contato. Recebemos sua mensagem com sucesso e nossa equipe responderá em breve.
          </p>
          <Button 
            variant="success" 
            onClick={() => navigate('/')}
            className="px-4 py-2 fw-bold custom-btn-primary"
          >
            Voltar para o Início
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MensagemEnviada;
