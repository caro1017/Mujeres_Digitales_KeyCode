import { Selects } from "./components/Selects";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
        <h1 className="text-3xl font-bold text-lime-400 mb-2 uppercase tracking-wide hover:text-lime-700 transition duration-700 ease-in-out animate-pulse">
          Aprendizaje React
        </h1>
        <p className="text-lg text-lime-700 mb-5 italic">Selects Anidado</p>
        <hr className="w-96 border-gray-300 mb-10" />
        <Selects />
      </div>
    </>
  );
}

export default App;
