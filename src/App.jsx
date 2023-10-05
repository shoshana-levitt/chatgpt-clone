import { useState } from "react";
import { OpenAI } from "openai";
import "./App.css";

function App() {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  //   const chatCompletion = openai.chat.completions.create({
  //     messages: [{ role: "user", content: "Say this is a test" }],
  //     model: "gpt-3.5-turbo",
  //   });

  const generateImage = async () => {
    console.log("generateImage function called");
    const response = await openai.createImage({
      prompt: "a white siamese cat",
      n: 1,
      size: "1024x1024",
    });
    const image_url = response.data.data[0].url;
    console.log(image_url);
    return image_url;
  };

  return (
    <div>
      <button onClick={generateImage}>Generate Image</button>
    </div>
  );
}

export default App;
