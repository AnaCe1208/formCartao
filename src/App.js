import React, { useState } from 'react'; // Importa React e o hook useState do React para gerenciar o estado do componente
import './App.css'; // Importa o arquivo de estilos para o formulário (opcional)

// Componente funcional CreditCardForm
const CreditCardForm = () => {
  // Declaração de estados para armazenar os valores dos inputs do formulário
  const [cardName, setCardName] = useState(''); // Estado para armazenar o nome do titular do cartão
  const [cardNumber, setCardNumber] = useState(''); // Estado para armazenar o número do cartão
  const [securityCode, setSecurityCode] = useState(''); // Estado para armazenar o código de segurança do cartão
  const [submittedData, setSubmittedData] = useState(null); // Estado para armazenar os dados do formulário após o envio

  // Função que é chamada quando o formulário é enviado
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário, que é recarregar a página

    // Atualiza o estado submittedData com os dados atuais dos inputs
    setSubmittedData({
      name: cardName,
      number: cardNumber,
      securityCode: securityCode,
    });

    // Exibe uma mensagem de sucesso
    alert('Informações do cartão enviadas com sucesso!');

    // Limpa os campos do formulário após o envio
    setCardName('');
    setCardNumber('');
    setSecurityCode('');
  };

  return (
    <div>
      {/* Formulário para inserção das informações do cartão de crédito */}
      <form onSubmit={handleSubmit} className="credit-card-form">
        {/* Grupo de campos para o nome do titular do cartão */}
        <div className="form-group">
          <label htmlFor="cardName">Nome do Titular:</label>
          <input
            type="text"
            id="cardName"
            value={cardName} // Valor do input controlado pelo estado cardName
            onChange={(e) => setCardName(e.target.value)} // Atualiza o estado cardName quando o valor do input muda
            placeholder="Nome como aparece no cartão"
            required // Campo obrigatório
          />
        </div>

        {/* Grupo de campos para o número do cartão */}
        <div className="form-group">
          <label htmlFor="cardNumber">Número do Cartão:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber} // Valor do input controlado pelo estado cardNumber
            onChange={(e) => setCardNumber(e.target.value)} // Atualiza o estado cardNumber quando o valor do input muda
            placeholder="1234 5678 9012 3456"
            required // Campo obrigatório
          />
        </div>

        {/* Grupo de campos para o código de segurança */}
        <div className="form-group">
          <label htmlFor="securityCode">Código de Segurança:</label>
          <input
            type="text"
            id="securityCode"
            value={securityCode} // Valor do input controlado pelo estado securityCode
            onChange={(e) => setSecurityCode(e.target.value)} // Atualiza o estado securityCode quando o valor do input muda
            placeholder="123"
            required // Campo obrigatório
          />
        </div>

        {/* Botão para enviar o formulário */}
        <button type="submit">Enviar</button>
      </form>

      {/* Se submittedData não for null, exibe as informações do cartão enviadas */}
      {submittedData && (
        <div className="submitted-data">
          <h2>Informações do Cartão:</h2>
          <p><strong>Nome do Titular:</strong> {submittedData.name}</p>
          <p><strong>Número do Cartão:</strong> {submittedData.number}</p>
          <p><strong>Código de Segurança:</strong> {submittedData.securityCode}</p>
        </div>
      )}
    </div>
  );
};

// Exporta o componente para uso em outros arquivos
export default CreditCardForm;
