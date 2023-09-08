import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-SNdKlaRFQF1O5ob1sWtQlK68",
    apiKey: process.env.OPEN_AI_SECRET_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function ImageGeneratorHandler(req, res) {
    try {
        const response = await openai.createImage({
            prompt: req.body.userCommand,
            n: 1,
            size: "512x512",
        });
        image_url = response.data.data[0].url;

        res.status(200).json({ imageURL: image_url });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' });
    }


}
