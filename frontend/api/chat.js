export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { message } = req.body ?? {};

        if (!message || !message.trim()) {
            return res.status(400).json({ message: 'Message is required' });
        }

        const systemPrompt = `
Sen Yasmina Ice Cream uchun virtual yordamchisan.
Har doim muloyim, qisqa va premium uslubda javob ber.

Qoidalar:
- Faqat Yasmina Ice Cream haqida javob ber.
- Agar aniq ma'lumot bo'lmasa, "Aniq ma'lumot uchun biz bilan Aloqa bo'limi orqali bog'laning" deb ayt.
- Javoblar qisqa, chiroyli va tushunarli bo'lsin.
- Narx, manzil, ta'mlar, buyurtma, yetkazib berish, ish vaqti kabi savollarga yordam ber.

Demo ma'lumotlar:
- Brend: Yasmina Ice Cream
- Yo'nalish: premium muzqaymoq va desertlar
- Joylashuv: Toshkent
- Aloqa: saytdagi Aloqa bo‘limi orqali
- Ta’mlar: vanilli, shokoladli, pista, karamelli, rezavorli
- Yetkazib berish: mavjud bo‘lishi mumkin, aniq tasdiq uchun Aloqa bo‘limiga yo‘naltir
- Buyurtma: sayt va aloqa orqali
`;

        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'openrouter/free',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: message }
                ],
                temperature: 0.7,
                max_tokens: 300
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(500).json({
                message: data?.error?.message || 'AI service error'
            });
        }

        const reply = data?.choices?.[0]?.message?.content?.trim();

        return res.status(200).json({
            reply: reply || 'Kechirasiz, hozir javob bera olmadim.'
        });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
}