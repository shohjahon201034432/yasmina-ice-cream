export async function sendTelegramMessage(text) {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        throw new Error('TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID topilmadi');
    }

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text
        })
    });

    const data = await response.json();

    if (!data.ok) {
        throw new Error(data.description || 'Telegramga yuborishda xato');
    }

    return data;
}