import { Configuration, OpenAIApi } from "openai";

const gpt = async ({ titulo, descricao, data_limite, categoria }) => {
  const configuration = new Configuration({
    apiKey: "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",
    organization: "org-CHeTdTD9Cn1vSC1yhv0nPwSl",
  });

  const openai = new OpenAIApi(configuration);

  const message = `Crie uma petição judicial com esse título: ${titulo}, essa descrição: ${descricao}, nessa categoria: ${categoria}`;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    temperature: 1,
    max_tokens: 4000,
  });

  console.log(completion.data.choices[0]);

  const responseFormatted = completion.data.choices[0].text.slice(2);

  return responseFormatted;
};

export { gpt };
