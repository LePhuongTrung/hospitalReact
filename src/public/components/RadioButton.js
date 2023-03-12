import { Radio } from "@material-tailwind/react";
import { forwardRef } from "react";

const RadioButton = forwardRef((props, ref) => {
  const { label, errors } = props;

  return (
    <div>
      <label htmlFor="text" className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex space-x-10">
        <Radio id="True" name="option1" label="Yes" />
        <Radio id="False" name="option2" label="No" />
      </div>
      {errors && <p className="text-[#FF0000]">{errors.message}</p>}
    </div>
  );
});

export default RadioButton;
