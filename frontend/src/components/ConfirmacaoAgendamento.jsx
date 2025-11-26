import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ConfirmacaoAgendamento() {
  const { token } = useParams();
  const [status, setStatus] = useState('carregando');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    const confirmar = async () => {
      try {
        const response = await fetch(
          `https://spa-lisianegarroni.onrender.com/api/agendamentos/confirmar/${token}`,
          { method: 'POST' }
        );

        const data = await response.json();

        if (data.sucesso) {
          setStatus('sucesso');
          setMensagem('✅ Agendamento confirmado com sucesso!');
        } else {
          setStatus('erro');
          setMensagem(`❌ ${data.erro}`);
        }
      } catch (error) {
        setStatus('erro');
        setMensagem('❌ Erro ao confirmar agendamento');
      }
    };

    if (token) {
      confirmar();
    }
  }, [token]);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      {status === 'carregando' && <p>Carregando...</p>}
      {status === 'sucesso' && <h1 style={{ color: 'green' }}>{mensagem}</h1>}
      {status === 'erro' && <h1 style={{ color: 'red' }}>{mensagem}</h1>}
    </div>
  );
}
