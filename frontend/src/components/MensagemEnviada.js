import React from "react";
import '../Styles/MensagemEnviada.css'; // Importa o arquivo de estilos CSS específico para este componente

// Define o componente funcional MensagemEnviada
const MensagemEnviada = () => {
  return (
    // Elemento principal do componente, utilizando classes do Bootstrap para espaçamento e layout responsivo
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

export default MensagemEnviada; // Exporta o componente para ser utilizado em outros arquivos
