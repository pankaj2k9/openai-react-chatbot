import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-SNdKlaRFQF1O5ob1sWtQlK68",
    apiKey: process.env.OPEN_AI_SECRET_KEY,
});
const openai = new OpenAIApi(configuration);
const OPEN_AI_MODEL = 'gpt-3.5-turbo';

export default async function ChatbotHandler(req, res) {
  const completion = await openai.createCompletion({
    model: OPEN_AI_MODEL,
    prompt: reviewPrompt(req.body.message),
    max_tokens: 150,
    temperature: 0.8,
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.0
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}


function reviewPrompt(productName) {
    return `Topic: ${productName}
    Two-Sentence Description:`
    ;
  }
