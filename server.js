const { CohereClient } = require("cohere-ai");
const dotenv = require("dotenv");

const express = require("express");

let cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());
let cohereResponse = "";

dotenv.config();
// const cohere = new CohereClient({
//   token: process.env.COHERE_KEY,
// });

// (async () => {
//   const chatStream = await cohere.chatStream({
//     message:
//       "Pretend you are an home assistant for an elderly, ask me if I have taken ${asprin} at ${lunch} today",
//     // perform web search before answering the question. You can also use your own custom connector.
//     connectors: [{ id: "web-search" }],
//   });

//   for await (const message of chatStream) {
//     if (message.eventType === "text-generation") {
//       cohereResponse = cohereResponse + message;
//     }
//   }
// })();

app.get("/", (req, res, next) => {
  res.status(200);
  res.send("Heyy team this is your favourite AI XOXO");
});

app.post("/", (req, res, next) => {
  // Assuming the text is sent in a JSON object with a key "text"
  const transcribedText = req.body.text;

  // You can include your logic here, for example, interacting with Cohere API or any other processing

  console.log(`Received text: ${transcribedText}`);

  // For demonstration, echoing back the received text with a message
  res.status(200).json({
    message: `Love you from server, happy birthday I am AI your lover XOXO`,
  });
});

app.listen(3001, () => {
  console.log(`Example app listening on port 3001`);
});
