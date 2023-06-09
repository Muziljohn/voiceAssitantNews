import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    alanBtn({
      key: "e5a8cc5afe1582651c2aaf1ccdd8ee752e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command }) => {
        if (command === "test command") {
          alert("this command was executed");
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <h1>Bayanguu wa</h1>
    </div>
  );
}

export default App;
