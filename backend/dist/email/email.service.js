"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const resend_1 = require("resend");
const contact_messages_service_1 = require("../contact-messages/contact-messages.service");
const logger_service_1 = require("../common/logger.service");
let EmailService = class EmailService {
    contactMessagesService;
    resend;
    fromEmail;
    logger = logger_service_1.Logger;
    constructor(contactMessagesService) {
        this.contactMessagesService = contactMessagesService;
        const apiKey = process.env.RESEND_API_KEY || 're_demo_key';
        this.resend = new resend_1.Resend(apiKey);
        this.fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';
    }
    generateEmailTemplate(message, recipientName) {
        return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Respuesta de José Gaspard</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    
                    <!-- Header con gradiente -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">José Gaspard</h1>
                            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">SEO Architect & Full-Stack Developer</p>
                        </td>
                    </tr>

                    <!-- Contenido -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">Hola ${recipientName},</p>
                            <div style="color: #555555; font-size: 15px; line-height: 1.8; margin-bottom: 30px;">${message.replace(/\n/g, '<br>')}</div>
                            <p style="color: #555555; font-size: 15px; line-height: 1.6; margin: 30px 0 0 0;">¡Saludos! 👋</p>
                        </td>
                    </tr>

                    <!-- Firma -->
                    <tr>
                        <td style="padding: 0 30px 40px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" style="border-top: 2px solid #f0f0f0; padding-top: 25px;">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 8px 0; color: #333333; font-size: 16px; font-weight: 700;">José Gaspard Hernani</p>
                                        <p style="margin: 0 0 4px 0; color: #667eea; font-size: 14px; font-weight: 600;">SEO Architect & Full-Stack Developer</p>
                                        <p style="margin: 0 0 15px 0; color: #888888; font-size: 13px; line-height: 1.6;">Especialista en SEO Técnico, Link Building y Desarrollo Web Premium</p>
                                        
                                        <table cellpadding="0" cellspacing="0">
                                            <tr><td style="padding-right: 15px;"><a href="mailto:hola@josegaspard.dev" style="color: #667eea; text-decoration: none; font-size: 13px;">📧 hola@josegaspard.dev</a></td></tr>
                                            <tr><td style="padding-top: 6px;"><a href="https://josegaspard.dev" style="color: #667eea; text-decoration: none; font-size: 13px;">🌐 josegaspard.dev</a></td></tr>
                                            <tr><td style="padding-top: 6px; color: #888888; font-size: 13px;">📍 Ciudad de México, México</td></tr>
                                        </table>

                                        <table cellpadding="0" cellspacing="0" style="margin-top: 15px;">
                                            <tr>
                                                <td style="padding-right: 10px;"><a href="https://linkedin.com/in/josegaspard" style="color: #667eea; text-decoration: none; font-size: 13px;">LinkedIn</a></td>
                                                <td style="padding-right: 10px; color: #cccccc;">|</td>
                                                <td style="padding-right: 10px;"><a href="https://github.com/josegaspard" style="color: #667eea; text-decoration: none; font-size: 13px;">GitHub</a></td>
                                                <td style="padding-right: 10px; color: #cccccc;">|</td>
                                                <td><a href="https://twitter.com/josegaspard" style="color: #667eea; text-decoration: none; font-size: 13px;">Twitter</a></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8f9fa; padding: 20px 30px; text-align: center;">
                            <p style="margin: 0; color: #888888; font-size: 12px; line-height: 1.5;">
                                Este email es una respuesta a tu mensaje de contacto.<br>
                                Si tienes alguna pregunta adicional, no dudes en responder este correo.
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        `;
    }
    async sendReply(messageId, replyText) {
        try {
            const originalMessage = await this.contactMessagesService.findOne(messageId);
            if (!originalMessage) {
                return { success: false, message: 'Mensaje no encontrado' };
            }
            const emailHtml = this.generateEmailTemplate(replyText, originalMessage.name);
            const { data, error } = await this.resend.emails.send({
                from: this.fromEmail,
                to: [originalMessage.email],
                subject: `Re: ${originalMessage.message.substring(0, 50)}...`,
                html: emailHtml,
            });
            if (error) {
                this.logger.error('Failed to send email with Resend', error.message, 'EmailService.sendReply');
                await this.contactMessagesService.reply(messageId, replyText);
                return { success: false, message: `Error al enviar email: ${error.message}` };
            }
            await this.contactMessagesService.reply(messageId, replyText);
            console.log('✅ Email enviado exitosamente:', data);
            return {
                success: true,
                message: `Email enviado a ${originalMessage.email}`
            };
        }
        catch (error) {
            this.logger.error('Failed to send reply', error, 'EmailService.sendReply');
            return { success: false, message: 'Error al enviar respuesta' };
        }
    }
    async sendBulkEmail(subject, content, recipientEmails) {
        let sent = 0;
        let failed = 0;
        for (const email of recipientEmails) {
            try {
                const emailHtml = this.generateEmailTemplate(content, 'Suscriptor');
                const { error } = await this.resend.emails.send({
                    from: this.fromEmail,
                    to: [email],
                    subject: subject,
                    html: emailHtml,
                });
                if (error) {
                    this.logger.error(`Failed to send email to ${email}`, error.message, 'EmailService.sendBulkEmail');
                    failed++;
                }
                else {
                    console.log(`✅ Email enviado a: ${email}`);
                    sent++;
                }
            }
            catch (error) {
                this.logger.error(`Failed to send email to ${email}`, error, 'EmailService.sendBulkEmail');
                failed++;
            }
        }
        return { success: true, sent, failed };
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [contact_messages_service_1.ContactMessagesService])
], EmailService);
//# sourceMappingURL=email.service.js.map