const { CohereClient } = require("cohere-ai");
const dotenv = require("dotenv");

dotenv.config();
const cohere = new CohereClient({
  token: process.env.COHERE_KEY,
});

(async () => {
  const chatStream = await cohere.chatStream({
    message:
      "Pretend you are an home assistant for an elderly, ask me if I have taken asprin after lunch today",
    // perform web search before answering the question. You can also use your own custom connector.
    connectors: [{ id: "web-search" }],
  });

  for await (const message of chatStream) {
    if (message.eventType === "text-generation") {
      console.log(message);
    }
  }
})();
