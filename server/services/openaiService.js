import OpenAI from 'openai';
import 'dotenv/config';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateSummary(text) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `You are a legal risk analyzer. Analyze the text and return the response in this EXACT format:
        SCORE: [Number 0-100]
        SUMMARY: [Short executive summary]
        RISKS: [Bullet points of main concerns]`,
      },
      { role: 'user', content: text },
    ],
  });

  return response.choices[0].message.content;
}
