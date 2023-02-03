import { forwardRef } from "react";

const FormInput = forwardRef((props, ref) => {
  const { number, type, disabled, drugName, amount } = props;

  return (
    <div>
      <div className="flex mt-4">
        <div className="flex w-4/6">
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700 w-6"
          >
            {number}
          </label>
          <div className=" w-full">
            <input
              type={type}
              disabled={disabled}
              ref={ref}
              value={drugName}
              {...props}
              className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="flex w-2/6 ml-2">
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700 w-4"
          >
            x
          </label>
          <div className=" w-full">
            <input
              type={type}
              disabled={disabled}
              ref={ref}
              value={amount}
              {...props}
              className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <label
          htmlFor="text"
          className="block text-sm font-medium text-gray-700 w-6 ml-2"
        >
          Pill
        </label>
      </div>
      <div className="flex mt-2 w-full ml-6">
        <label
          htmlFor="text"
          className="block text-sm font-medium text-gray-700 w-6"
        >
          Drink
        </label>
        <div className="ml-6 w-2/6">
          <input
            type={type}
            ref={ref}
            value={drugName}
            {...props}
            className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <label
          htmlFor="text"
          className="block text-sm font-medium text-gray-700 w-20 ml-4"
        >
          Times a day,
        </label>
        <div className="ml-2 w-3/12 ">
          <input
            type={type}
            ref={ref}
            value={drugName}
            {...props}
            className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <label
          htmlFor="text"
          className="block text-sm font-medium text-gray-700 w-20 ml-4"
        >
          pill time
        </label>
      </div>
    </div>
  );
});

export default FormInput;
