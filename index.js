const venom = require('venom-bot');
const axios = require('axios');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
    elaineBot(client);
};

async function elaineBot(client){
    console.log("Morgana-chan kyun kyun");
    client.onMessage(message => {
      axios.post('http://127.0.0.1:5000/', {
        "data": message.body
      })
      .then(data => {
        sendMsg(client, message.from, data.data);
      })
    })
}

async function getChat(client){
    const chat = await client.getAllMessagesInChat('5582'+client+'@c.us');
    
    console.log(chat);
}

async function sendMsg(client, sender, msg) {
    await client
    .sendText(sender, msg)
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

