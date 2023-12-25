import RandomResult from "./ui/RandomResult";

function App() {
  return (
    <div className="min-h-screen">
      <header>
        <nav className="bg-teal-700 ">
          <ul className="flex justify-center p-5 text-teal-50 font-bold text-xl">
            <li className="font-bold">✨ IDKIfy ✨</li>
          </ul>
        </nav>
      </header>
      <RandomResult />
    </div>
  );
}

export default App;
