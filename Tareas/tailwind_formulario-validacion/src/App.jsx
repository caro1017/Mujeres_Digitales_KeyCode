import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
        <h1 className="text-3xl font-bold text-lime-400 mb-2 uppercase tracking-wide">
          Formulario de validación
        </h1>
        <div className="card w-[30%] border border-lime-400 m-1 px-8 pb-8 rounded-md">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default App;
