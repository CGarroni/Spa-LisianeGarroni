import nodemailer from 'nodemailer';
import dotenev from 'dotenev';

dotenev.config();

// Criar transportador (configuração SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

// Função para enviar email de confirmação
export async function enviarEmailConfirmacao(agendamento) {
  const data = agendamento.dataFormatada;
  const hora = agendamento.horario;
  const servico = agendamento.servico;
  const nome = agendamento.nome;

  const htmlContent = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #2c3e50; text-align: center;">Confirmação de Agendamento</h2>

  <div style="background-color: #ecf0f1; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #e74c3c;">Detalhes do seu agendamento:</h3>
        
        <p><strong>Cliente:</strong> ${nome}</p>
        <p><strong>Serviço:</strong> ${servico}</p>
        <p><strong>Data:</strong> ${data}</p>
        <p><strong>Horário:</strong> ${hora}</p>
        <p><strong>Token de Confirmação:</strong> ${agendamento.tokenConfirmacao}</p>
      </div>

      <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 20px 0;">
        <p style="margin: 0; color: #856404;">
          ⚠️ <strong>Importante:</strong> Confirme seu agendamento clicando no link abaixo dentro de 24 horas.
        </p>
      </div>

      <div style="text-align: center; margin: 30px 0;">
        <a href="${process.env.FRONTEND_URL}/confirmar/${agendamento.tokenConfirmacao}" 
           style="background-color: #27ae60; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
          Confirmar Agendamento
        </a>
      </div>

      <p style="color: #7f8c8d; font-size: 12px; text-align: center; margin-top: 30px;">
        Se você não fez este agendamento, ignore este email.
      </p>
    </div>
  `;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: agendamento.email,
    subject: `Confirmação de Agendamento - ${servico}`,
    hmtl: htmlContent
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email de confirmação enviado para:', agendamento.email);
    return true;
  } catch (error) {
    console.error('Erro ao enviar email', error);
    return false;
  }
}

// Função para enviar email de cancelamento
export async function enviarEmailCancelamento(agendamento) {
  const data = agendamento.dataFormatada;
  const hora = agendamento.horario;
  const servico = agendamento.servico;
  const nome = agendamento.nome;

  const htmlContent = `
   <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2c3e50; text-align: center;">Agendamento Cancelado</h2>
      
      <div style="background-color: #fadbd8; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #c0392b;">Seu agendamento foi cancelado:</h3>
        
        <p><strong>Cliente:</strong> ${nome}</p>
        <p><strong>Serviço:</strong> ${servico}</p>
        <p><strong>Data:</strong> ${data}</p>
        <p><strong>Horário:</strong> ${hora}</p>
      </div>

      <p style="color: #34495e; line-height: 1.6;">
        Sentiremos sua falta! Se precisar remarcar, clique no botão abaixo:
      </p>

      <div style="text-align: center; margin: 30px 0;">
        <a href="${process.env.FRONTEND_URL}/agendar" 
           style="background-color: #3498db; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
          Fazer Novo Agendamento
        </a>
      </div>

      <p style="color: #7f8c8d; font-size: 12px; text-align: center; margin-top: 30px;">
        Dúvidas? Entre em contato conosco.
      </p>
    </div> 
  `;

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email de cancelamento enviado para:', agendamento.email);
    return true;
  } catch (error) {
    console.log('Error ao enviar email:', error);
    return false;
  }
}
