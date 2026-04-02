import { sendTelegramMessage } from '../utils/telegram.js';

export async function sendContactMessage(req, res) {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: 'Barcha maydonlarni to‘ldiring'
      });
    }

    const text = `🍦 Yasmina Ice Cream

👤 Ism: ${name}
📧 Email: ${email}
💬 Xabar: ${message}`;

    await sendTelegramMessage(text);

    return res.status(200).json({
      message: 'Xabar muvaffaqiyatli yuborildi'
    });
  } catch (error) {
    console.error('Contact send error:', error);

    return res.status(500).json({
      message: 'Xabar yuborishda xatolik yuz berdi'
    });
  }
}