import React from "react";
import '../Styles/MensagemEnviada.css';

const MensagemEnviada = () => {
  return (
    <main className="main container mx-auto mt-5 p-5">
      <div className="container mt-5 mb-5 text-center">
        <h2 className="text-success">Obrigado pela sua mensagem!</h2>
        <p className="mt-3">
          Recebemos sua mensagem com sucesso e entraremos em contato em breve.
        </p>
      </div>
    </main>
  );
};

export default MensagemEnviada;
