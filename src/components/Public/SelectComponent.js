import { Option, Select } from "@material-tailwind/react";
import { forwardRef } from "react";
const SelectComponent = forwardRef((props, ref) => {
  const { label, type, errors } = props;

  return (
    <div className="w-72">
      <Select label="Select Version">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
      {errors && <p className="text-[#FF0000]">{errors.message}</p>}
    </div>
  );
});

export default SelectComponent;
