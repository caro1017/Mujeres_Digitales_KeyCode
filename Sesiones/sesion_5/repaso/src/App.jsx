import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
  /* const [parametro inicial, parametro cambia] = useState(resultado) */
  const [contador, setContador] = useState(0);
  const [contador5, setContador5] = useState(0);

  useEffect(() => {
    setContador5(contador);
  }, [contador]);

  const restarContador = (numero) => {
    setContador(contador - numero);
    setContador5(contador5 - 5);
  };

  const sumarContador = (numero) => {
    setContador(contador + numero);
    setContador5(contador5 + 5);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* Contador aumentar 1 */}
      <div className="contador">
        <p>Contador 1</p>
        <div>
          <button onClick={restarContador}>-</button>
          <p>{contador}</p>
          <button onClick={sumarContador}>+</button>
        </div>
      </div>

      {/* Contador especifico */}
      <div className="contador">
        <p>Contador 5</p>
        <div>
          <button onClick={restarContador}>-</button>
          <p>{contador}</p>
          <button onClick={sumarContador}>+</button>
        </div>
      </div>

      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
