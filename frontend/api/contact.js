export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Barcha maydonlarni to‘ldiring' });
        }

        const text = `🍦 Yasmina Ice Cream

👤 Ism: ${name}
📧 Email: ${email}
💬 Xabar: ${message}`;

        const tgResponse = await fetch(
            `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: process.env.TELEGRAM_CHAT_ID,
                    text
                })
            }
        );

        const tgData = await tgResponse.json();

        if (!tgData.ok) {
            return res.status(500).json({ message: 'Telegramga yuborilmadi' });
        }

        return res.status(200).json({ message: 'Xabar muvaffaqiyatli yuborildi' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
}