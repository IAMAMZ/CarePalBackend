const { CohereClient } = require("cohere-ai");
const dotenv = require("dotenv");

const express = require("express");

let cors = require("cors");

const app = express();

app.use(cors());
let cohereResponse = "";

dotenv.config();
// const cohere = new CohereClient({
//   token: process.env.COHERE_KEY,
// });

// (async () => {
//   const chatStream = await cohere.chatStream({
//     message:
//       "Pretend you are an home assistant for an elderly, ask me if I have taken asprin after lunch today",
//     // perform web search before answering the question. You can also use your own custom connector.
//     connectors: [{ id: "web-search" }],
//   });

//   for await (const message of chatStream) {
//     if (message.eventType === "text-generation") {
//       cohereResponse = cohereResponse + message;
//     }
//   }
// })();

app.post("/", (req, res, next) => {
  res.status(200);
  res.send("hello");
});

app.listen(3001, () => {
  console.log(`Example app listening on port 3001`);
});
