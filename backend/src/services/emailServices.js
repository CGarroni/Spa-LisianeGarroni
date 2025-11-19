import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

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

// EMAIL 1: CONFIRMAÇÃO PARA CLIENTE
export async function enviarEmailConfirmacao(agendamento) {
  const data = agendamento.dataFormatada;
  const hora = agendamento.horario;
  const servico = agendamento.servico;
  const nome = agendamento.nome;

  const htmlContent = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #2c3e50; text-align: center;">✅ Confirmação de Agendamento</h2>

    <div style="background-color: #ecf0f1; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #e74c3c;">Detalhes do seu agendamento:</h3>
      
      <p><strong>Cliente:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${agendamento.email}</p>
      <p><strong>Telefone:</strong> ${agendamento.telefone}</p>
      <p><strong>Serviço:</strong> ${servico}</p>
      <p><strong>Data:</strong> ${data}</p>
      <p><strong>Horário:</strong> ${hora}</p>
    </div>

    <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 20px 0;">
      <p style="margin: 0; color: #856404;">
        ⚠️ <strong>Importante:</strong> Confirme seu agendamento clicando no link abaixo dentro de 24 horas.
      </p>
    </div>

    <div style="text-align: center; margin: 30px 0;">
      <a href="${process.env.FRONTEND_URL}/confirmar/${agendamento.tokenConfirmacao}" 
         style="background-color: #27ae60; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
        ✓ Confirmar Agendamento
      </a>
    </div>

    <hr style="border: none; border-top: 1px solid #ecf0f1; margin: 20px 0;">

    <p style="color: #7f8c8d; font-size: 12px;">
      <strong>Dúvidas?</strong> Entre em contato conosco pelo WhatsApp: 
      <a href="https://wa.me/5551999308532" style="color: #27ae60;">+55 51 99846-7866</a>
    </p>

    <p style="color: #7f8c8d; font-size: 12px; text-align: center; margin-top: 20px;">
      Se você não fez este agendamento, ignore este email.
    </p>
  </div>
  `;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: agendamento.email,
    subject: `✅ Confirmação de Agendamento - ${servico} - Spa Lisiane Garroni`,
    html: htmlContent
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email de confirmação enviado para:', agendamento.email);
    return true;
  } catch (error) {
    console.error('❌ Erro ao enviar email de confirmação:', error);
    return false;
  }
}

// EMAIL 2: NOTIFICAÇÃO PARA O SPA
export async function enviarEmailSpa(agendamento) {
  const data = agendamento.dataFormatada;
  const hora = agendamento.horario;
  const servico = agendamento.servico;
  const nome = agendamento.nome;
  const email = agendamento.email;
  const telefone = agendamento.telefone;

  const htmlContent = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #e74c3c; text-align: center;">📋 Novo Agendamento Recebido</h2>

    <div style="background-color: #d5f4e6; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #27ae60;">
      <h3 style="color: #27ae60; margin-top: 0;">Informações do Cliente:</h3>
      
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Telefone:</strong> <a href="tel:${telefone}">${telefone}</a></p>
      <p><strong>WhatsApp:</strong> <a href="https://wa.me/55${telefone.replace(/\D/g, '')}">${telefone}</a></p>
    </div>

    <div style="background-color: #ecf0f1; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #2c3e50; margin-top: 0;">Detalhes do Agendamento:</h3>
      
      <p><strong>Serviço:</strong> ${servico}</p>
      <p><strong>Data:</strong> ${data}</p>
      <p><strong>Horário:</strong> ${hora}</p>
      <p><strong>Status:</strong> ⏳ Pendente de Confirmação</p>
    </div>

    <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 20px 0;">
      <p style="margin: 0; color: #856404;">
        📌 <strong>Ação necessária:</strong> O cliente deve confirmar o agendamento por email dentro de 24 horas.
      </p>
    </div>

    <div style="text-align: center; margin: 30px 0;">
      <a href="${process.env.FRONTEND_URL}/admin/agendamentos" 
         style="background-color: #3498db; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
        📊 Gerenciar Agendamentos
      </a>
    </div>

    <p style="color: #7f8c8d; font-size: 12px; text-align: center; margin-top: 20px;">
      Email automático - Spa Lisiane Garroni
    </p>
  </div>
  `;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.EMAIL_SPA,
    subject: `📋 Novo Agendamento - ${nome} - ${data} às ${hora}`,
    html: htmlContent
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email de notificação enviado para SPA:', process.env.EMAIL_SPA);
    return true;
  } catch (error) {
    console.error('❌ Erro ao enviar email para SPA:', error);
    return false;
  }
}

// EMAIL 3: CANCELAMENTO
export async function enviarEmailCancelamento(agendamento) {
  const data = agendamento.dataFormatada;
  const hora = agendamento.horario;
  const servico = agendamento.servico;
  const nome = agendamento.nome;

  const htmlContent = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #c0392b; text-align: center;">❌ Agendamento Cancelado</h2>
    
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
      <a href="${process.env.FRONTEND_URL}/#booking" 
         style="background-color: #3498db; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
        📅 Fazer Novo Agendamento
      </a>
    </div>

    <p style="color: #7f8c8d; font-size: 12px; text-align: center; margin-top: 30px;">
      Dúvidas? Entre em contato pelo WhatsApp: +55 51 99846-7866
    </p>
  </div>
  `;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: agendamento.email,
    subject: `❌ Agendamento Cancelado - ${servico}`,
    html: htmlContent
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email de cancelamento enviado para:', agendamento.email);
    return true;
  } catch (error) {
    console.error('❌ Erro ao enviar email de cancelamento:', error);
    return false;
  }
}

// EMAIL 4: LEMBRETE 24H ANTES (Opcional - usar com Cron Job)
export async function enviarEmailLembrete(agendamento) {
  const data = agendamento.dataFormatada;
  const hora = agendamento.horario;
  const servico = agendamento.servico;
  const nome = agendamento.nome;

  const htmlContent = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #f39c12; text-align: center;">⏰ Lembrete de Agendamento</h2>

    <div style="background-color: #fef5e7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f39c12;">
      <h3 style="color: #f39c12; margin-top: 0;">Seu agendamento é amanhã!</h3>
      
      <p><strong>Serviço:</strong> ${servico}</p>
      <p><strong>Data:</strong> ${data}</p>
      <p><strong>Horário:</strong> ${hora}</p>
    </div>

    <p style="color: #34495e; line-height: 1.6;">
      Preparamos uma sessão especial para você! 
      <br><br>
      <strong>Chegar com 10 minutos de antecedência é importante.</strong>
    </p>

    <div style="text-align: center; margin: 30px 0;">
      <a href="https://wa.me/5551999308532" 
         style="background-color: #27ae60; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
        💬 Confirmar pelo WhatsApp
      </a>
    </div>

    <p style="color: #7f8c8d; font-size: 12px; text-align: center; margin-top: 30px;">
      Até breve! 🎉
    </p>
  </div>
  `;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: agendamento.email,
    subject: `⏰ Lembrete: Seu agendamento é amanhã!`,
    html: htmlContent
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email de lembrete enviado para:', agendamento.email);
    return true;
  } catch (error) {
    console.error('❌ Erro ao enviar email de lembrete:', error);
    return false;
  }
}
