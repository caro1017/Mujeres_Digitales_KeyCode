import { useForms } from "../hooks/useForms";
import { Loader } from "./Loader";
import Mail from "./Mail";

//Valores por defecto para el formulario
const valorDefecto = {
  nombre: "",
  email: "",
  asunto: "",
  observaciones: "",
};

//Validaciones para verificar el contenido y que tengan el formato correcto
const validaciones = (form) => {
  //Puede tener cualquier caracter alfanumerico + @ + cualquier letra + . + cualquier caracter minimo 2 maximo 6
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,6}$/;
  //Puede tener minimo 1 y maximo 255 caracteres
  let regexComments = /^.{1,255}$/;

  let errorsFormulario = {};

  //Validaciones de inputs vacios y sin el patron especificado
  if (!form.nombre.trim()) {
    errorsFormulario.nombre = "El campo es obligatorio";
  }
  if (!form.email.trim()) {
    errorsFormulario.email = "El campo es obligatorio";
  } else if (!regexEmail.test(form.email.trim())) {
    errorsFormulario.email =
      "El campo no tiene el formato de un correo electronico";
  }
  if (!form.asunto.trim()) {
    errorsFormulario.asunto = "El campo es obligatorio";
  }
  if (!form.observaciones.trim()) {
    errorsFormulario.observaciones = "El campo es obligatorio";
  } else if (!regexComments.test(form.observaciones.trim())) {
    errorsFormulario.observaciones =
      "El campo debe tener minimo 1 caracter y maximo 255 caracteres";
  }

  return errorsFormulario;
};

const ContactForm = () => {
  //Llamado a nuestro custom hook recibiendo mis variables y mis funciones
  const {
    form,
    errores,
    cargando,
    bd,
    respuesta,
    manejadorCambios,
    manejadorSalidaInput,
    enviarFormulario,
  } = useForms(valorDefecto, validaciones);

  // Condición para habilitar el botón de envío solo si no hay errores y todos los campos están completos
  const isFormValid =
    Object.keys(errores).length === 0 &&
    form.nombre.trim() !== "" &&
    form.email.trim() !== "" &&
    form.asunto.trim() !== "" &&
    form.observaciones.trim() !== "";

  return (
    <>
      {/* con el evento onSubmit ejecutamos una funcion cuando se envia el formulario */}
      <form onSubmit={enviarFormulario} className="mb-5">
        {/* Nombre */}
        <p className="text-lime-400 text-xs tracking-wide mt-5 mb-2">Nombre</p>
        <div className="relative max-w-md mx-auto">
          <i className="bx bx-user absolute left-3 inset-y-0 my-1 text-gray-400 text-xl"></i>
          <input
            type="text"
            name="nombre"
            placeholder="Escribe tu nombre..."
            value={form.nombre}
            onChange={manejadorCambios}
            onBlur={manejadorSalidaInput}
            className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-lime-400 shadow-sm rounded-lg"
          />
        </div>
        {/* Muestra la etiqueta p con el error solo si tiene un error en nombre */}
        {errores.nombre && (
          <p className="text-red-500 text-xs mt-1 italic tracking-wide">
            {errores.nombre}
          </p>
        )}

        {/* Email */}
        <p className="text-lime-400 text-xs tracking-wide mt-2 mb-2">Email</p>
        <div className="relative max-w-md mx-auto">
          <i className="bx bx-envelope absolute left-3 inset-y-0 my-1 text-gray-400 text-xl"></i>
          <input
            type="email"
            name="email"
            placeholder="Escribe tu correo electronico..."
            value={form.email}
            onChange={manejadorCambios}
            onBlur={manejadorSalidaInput}
            className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-lime-400 shadow-sm rounded-lg"
          />
        </div>
        {/* Muestra la etiqueta p con el error solo si tiene un error en email */}
        {errores.email && (
          <p className="text-red-500 text-xs mt-1 italic tracking-wide ">
            {errores.email}
          </p>
        )}

        {/* Asunto */}
        <p className="text-lime-400 text-xs tracking-wide mt-2 mb-2"> Asunto</p>
        <div className="relative max-w-md mx-auto">
          <i className="bx bx-text absolute left-3 inset-y-0 my-1 text-gray-400 text-xl"></i>
          <input
            type="text"
            name="asunto"
            placeholder="Asunto..."
            value={form.asunto}
            onChange={manejadorCambios}
            onBlur={manejadorSalidaInput}
            className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-lime-400 shadow-sm rounded-lg"
          />
        </div>
        {/* Muestra la etiqueta p con el error solo si tiene un error en asunto */}
        {errores.asunto && (
          <p className="text-red-500 text-xs mt-1 italic tracking-wide ">
            {errores.asunto}
          </p>
        )}

        {/* Observaciones */}
        <p className="text-lime-400 text-xs tracking-wide mt-2 mb-2">
          Observaciones
        </p>
        <div className="relative max-w-md mx-auto">
          <i className="bx bx-comment-detail absolute left-3 inset-y-0 my-1 text-gray-400 text-xl"></i>
          <textarea
            name="observaciones"
            placeholder="Escribe tus observaciones..."
            cols={50}
            rows={5}
            value={form.observaciones}
            onChange={manejadorCambios}
            onBlur={manejadorSalidaInput}
            className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-lime-400 shadow-sm rounded-lg"
          />
        </div>
        {/* Muestra la etiqueta p con el error solo si tiene un error en observaciones */}
        {errores.observaciones && (
          <p className="text-red-500 text-xs mt-1 italic tracking-wide ">
            {errores.observaciones}
          </p>
        )}

        {/* Button que envia el formulario */}
        <input
          type="submit"
          value="Enviar"
          disabled={!isFormValid || cargando}
          className={`w-full py-2.5 text-slate-950 font-bold bg-lime-400 rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2 ring-lime-400 focus:ring-2 mt-2 ${
            !isFormValid || cargando
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-400"
          }`}
        />
      </form>

      {/* Si cargando es True renderiza <Loader/> */}
      {cargando && <Loader />}
      {/* Muestra el componente Mail o el mensaje de éxito/fallo solo si no está cargando y ya hay respuesta */}
      {!cargando && respuesta && <Mail datos={bd} />}
    </>
  );
};

export default ContactForm;
