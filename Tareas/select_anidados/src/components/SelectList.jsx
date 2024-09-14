/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export const SelectList = ({ title }) => {
  const key = `select-${title}`;
  const label = title.toUpperCase();
  const option = ["Cundinamarca", "Antioquia", "Caldas"];

  return (
    <>
      <div className="flex flex-col space-y-2">
        <label htmlFor={key} className="text-xs tracking-widest font-medium text-lime-400">
          {label}
        </label>
        <select
          name={key}
          id={key}
          className="p-2 border border-lime-400 bg-slate-900 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400 text-opacity-30"
        >
          <option value="">Seleccione una {label}</option>
          {/* Options can be dynamically generated here */}
        </select>
      </div>
    </>
  );
};
