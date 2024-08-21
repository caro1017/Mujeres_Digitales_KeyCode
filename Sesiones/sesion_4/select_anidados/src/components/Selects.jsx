/* eslint-disable no-unused-vars */
import { SelectList } from "./SelectList";

// eslint-disable-next-line react/prop-types
export const Selects = ({ title }) => {
  return (
    <>
      <div className="space-y-4">
      <SelectList title="Estados" />
      <SelectList title="Municipio" />
      <SelectList title="Ciudad" />
    </div>
    </>
  );
};
