import { forwardRef } from "react";

const FormInput = forwardRef((props, ref) => {
  const { type, errors, disabled, value } = props;

  return (
    <div className=" w-full  my-auto">
      <input
        type={type}
        disabled={disabled}
        ref={ref}
        value={value}
        {...props}
        className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      {errors && <p className="text-[#FF0000]">{errors.message}</p>}
    </div>
  );
});

export default FormInput;
