const { CohereClient } = require("cohere-ai");
const dotenv = require("dotenv");

const express = require("express");

let cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

dotenv.config();

const cohere = new CohereClient({
  token: process.env.COHERE_KEY,
});

app.post("/firstResponse", async (req, res, next) => {
  // Assuming the text is sent in a JSON object with a key "text"
  const transcribedText = req.body.text;

  let cohereResponse = "";
  await (async () => {
    const chatStream = await cohere.chatStream({
      message: ` so this is a transcript from someone answering the question did you take your medication? if the answer implies yes, say a positive response and last word should be great. otherwise answer an advice on why they should take the medicaiton on time and end it with hope you the best just give me the answer nothing more make your response short this is the transcript: ${transcribedText}`,
      // perform web search before answering the question. You can also use your own custom connector.
      connectors: [{ id: "web-search" }],
    });

    for await (const message of chatStream) {
      if (message.eventType === "text-generation") {
        console.log(message);
        cohereResponse = cohereResponse + message.text;
      }
    }
  })();

  console.log(`Received text: ${cohereResponse}`);

  // For demonstration, echoing back the received text with a message
  res.status(200).json({
    message: cohereResponse,
  });
});
app.post("/mentalHealth", async (req, res, next) => {
  // Assuming the text is sent in a JSON object with a key "text"
  const transcribedText = req.body.text;

  let cohereResponse = "";
  await (async () => {
    const chatStream = await cohere.chatStream({
      message: ` you are a home caretaker ai robot that sometimes ask the quesiton how was your day? answer me here is the question from the question you posed: ${transcribedText}`,
      // perform web search before answering the question. You can also use your own custom connector.
      connectors: [{ id: "web-search" }],
    });

    for await (const message of chatStream) {
      if (message.eventType === "text-generation") {
        console.log(message);
        cohereResponse = cohereResponse + message.text;
      }
    }
  })();

  console.log(`Received text: ${cohereResponse}`);

  // For demonstration, echoing back the received text with a message
  res.status(200).json({
    message: cohereResponse,
  });
});

app.get("/", (req, res, next) => {
  res.status(200);
  res.send("Heyy team this is your favourite AI XOXO");
});

app.post("/", async (req, res, next) => {
  // Assuming the text is sent in a JSON object with a key "text"
  const transcribedText = req.body.text;

  let cohereResponse = "";
  await (async () => {
    const chatStream = await cohere.chatStream({
      message: ` I am sending you the name of a medication and the time only respond with a question asking, hey did you take your medication, medication name: medicaiton name is asprin transcribedText`,
      // perform web search before answering the question. You can also use your own custom connector.
      connectors: [{ id: "web-search" }],
    });

    for await (const message of chatStream) {
      if (message.eventType === "text-generation") {
        console.log(message);
        cohereResponse = cohereResponse + message.text;
      }
    }
  })();

  console.log(`Received text: ${cohereResponse}`);

  // For demonstration, echoing back the received text with a message
  res.status(200).json({
    message: cohereResponse,
  });
});

app.listen(3001, () => {
  console.log(`App listening on port 3001`);
});
