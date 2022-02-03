const venom = require('venom-bot');
const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
  apiKey: "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"
});
const openai = new OpenAIApi(configuration);


venom
  .create()
  .then((client) => start(client, openai))
  .catch((erro) => {
    console.log(erro);
  });

function start(client, openai) {
    elaineBot(client, openai);
};

async function elaineBot(client, openai){
    console.log("Morgana-chan kyun kyun");
    client.onMessage(message => {
      sendMsg(client, openai, message.from, message.body);
    })
}

async function getChat(client){
    const chat = await client.getAllMessagesInChat('5582'+client+'@c.us');
    
    console.log(chat);
}

async function sendMsg(client, openai, sender, msg) {
    const completion = await openai.createCompletion("text-davinci-001", {
      prompt: msg,
    });
    await client
    .sendText(sender, completion.data.choices[0].text.slice(2))
    .then((result) => {
      console.log('Result: ', result); //return object success
    })
    .catch((erro) => {
      console.error('Error when sending: ', erro); //return object error
    });
}

async function newMsg(client){
  const contactNewMsg = await client.getChatContactNewMsg();
  console.log(contactNewMsg);
}

async function getAI(openai, msg){
  const completion = await openai.createCompletion("text-davinci-001", {
    prompt: msg,
  });
  return await completion.data.choices[0].text;
}