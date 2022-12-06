import { Radio } from "@material-tailwind/react";
import { forwardRef } from "react";

const RadioButton = forwardRef((props, ref) => {
  const { label, errors } = props;

  return (
    <div>
      <label htmlFor="text" className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex gap-10">
        <Radio id="True" name="type" label="Yes" />
        <Radio id="False" name="type" label="No" defaultChecked />
      </div>
      {errors && <p className="text-[#FF0000]">{errors.message}</p>}
    </div>
  );
});

export default RadioButton;
