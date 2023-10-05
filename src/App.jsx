import { useState } from "react";
import OpenAI from "openai";
import "./App.css";

function App() {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const chatCompletion = openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
  });
  return <div>Hello World</div>;
}

export default App;
