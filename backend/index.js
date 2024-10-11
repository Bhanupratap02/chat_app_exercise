// index.js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", (req, res) => {
  const { message } = req.body;
  let response = "";

  if (
    message.toLowerCase().includes("hi") ||
    message.toLowerCase().includes("hello")
  ) {
    response = "Hello! How can I help you today?";
  } else if (message.toLowerCase().includes("diamonds")) {
    response =
      "Diamonds are a girl's best friend! They are timeless and elegant.";
  } else if (message.toLowerCase().includes("gold")) {
    response =
      "Gold jewelry is classic and versatile. It never goes out of style.";
  } else if (message.toLowerCase().includes("silver")) {
    response =
      "Silver jewelry is a great choice for those who love a more understated look.";
  } else if (
    message.toLowerCase().includes("bye") ||
    message.toLowerCase().includes("goodbye")
  ) {
    response = "Thank you for chatting! Have a great day!";
  } else {
    response = "I'm not sure about that. Can you please specify?";
  }

  res.json({ message: response });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
