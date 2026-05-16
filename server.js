const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.post("/chat", async (req, res) => {

  const userMessage = req.body.message;

  // fake AI response

  res.json({
    reply: "Hello! You said: " + userMessage
  });
});

app.listen(3000, () => {
  console.log("Server running");
});
