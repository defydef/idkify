import { useState } from "react";
import { useOptions } from "./hooks/useOptions";

function App() {
  const [choice, setChoice] = useState("");
  const { randomChoices } = useOptions();

  function getRandomChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    setChoice(arr[randomIndex]);
  }

  return (
    <div className="min-h-screen">
      <header>
        <nav className="bg-teal-700 ">
          <ul className="flex justify-center p-5 text-teal-50 font-bold text-xl">
            <li className="font-bold">✨ IDKIfy ✨</li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col justify-center items-center gap-10 min-h-[80vh]">
        <h2 className="font-bold">What's for Lunch?</h2>
        {choice && (
          <>
            <h1 className="font-bold text-2xl bg-teal-200 p-5 w-screen text-center">
              {choice}
            </h1>
          </>
        )}
        <button
          type="button"
          className="font-bold p-5 border border-teal-500 text-lg cursor-pointer rounded-md hover:shadow-xl hover:shadow-teal-500/60 text-teal-800"
          onClick={() => getRandomChoice(randomChoices)}
        >
          Get Random Choice
        </button>
      </main>
    </div>
  );
}

export default App;
