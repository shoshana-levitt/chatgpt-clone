import "./App.css";
import OpenAI from "openai";

function App() {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // const chatCompletion = await openai.chat.completions.create({
  //   messages: [{ role: "user", content: "Say this is a test" }],
  //   model: "gpt-3.5-turbo",
  // });

  const generateImage = async () => {
    const res = await openai.Image.create({
      prompt: "Say this is a test",
      n: 1,
      size: "1024x1024",
    });
    console.log(res.data.data[0].url);
  };

  return (
    <div>
      <button>Generate an Image</button>
    </div>
  );
}

export default App;
