/* eslint-disable react/prop-types */
/**
 *
 * datos viene en una estructura por capas asi:
 * {
 *  datos: {
 *        nombre: '',
 *        asunto: '',
 *        ...
 *    }
 * }
 *
 * Entonces para acceder, primero accedemos al segundo nivel del objeto = { datos } y despues
 * desestructuramos el ultimo nivel del objeto
 */

const Mail = ({ datos }) => {
  //Desestructuramos la informacion del form y le ponemos valores iniciales
  const { nombre = "", asunto = "", email = "", observaciones = "" } = datos;

  return (
    <div className="bg-[#101b34] shadow-md rounded-lg overflow-hidden max-w-md mx-auto my-4 ">
      <div className="p-4">
        <h2 className="text-base font-normal text-lime-400 mb-2">
          Asunto: <span className=" ml-2 text-white">{asunto}</span>
        </h2>
        <p className="text-base font-normal text-lime-400 mb-2">
          De:
          <span className=" text-white ml-2">
            {nombre} - ({email})
          </span>
        </p>
        <hr className="border-none h-0.5 bg-lime-400 rounded-lg my-4" />  
        <p className="text-base font-normal text-lime-400 mb-2">
          Mensaje:
          <span className=" text-white ml-2">{observaciones}</span>
        </p>
      </div>
    </div>
  );
};

export default Mail;
