const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function callChatGPT(text){
    try {
        const chatCompletion = await openai.createChatCompletion({
          model: "text-davinci-003",
          prompt: text,
          max_tokens: 3000
        });
        console.log(chatCompletion.data.choices[0].text);
    } catch (error) {
        console.log(error)
    }
}

callChatGPT("whats a cache")