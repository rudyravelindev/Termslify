const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const summarizeTerms = async (text) => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            "You are a specialized legal assistant. Summarize the following Terms and Conditions. Provide a 2-sentence 'Executive Summary', a 'Risk Level' (Low, Medium, High), and 3 bullet points of the most concerning clauses.",
        },
        { role: 'user', content: text },
      ],
    });
    return completion.choices[0].message.content;
  } catch (error) {
    throw new Error('AI failed to process the text.');
  }
};

module.exports = { summarizeTerms };
