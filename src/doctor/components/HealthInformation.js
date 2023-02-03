import { forwardRef } from "react";

const FormInput = forwardRef((props, ref) => {
  const { disabled, value } = props;

  return (
    <div className="mt-6">
      <div className="flex">
        <div className="w-6/12 ml-4 flex">
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700 w-20"
          >
            - Pulse:
          </label>
          <div className=" w-5/6">
            <input
              type="Number"
              disabled={disabled}
              ref={ref}
              value={value}
              {...props}
              className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700 w-20"
          >
            times/minute;
          </label>
        </div>
        <div className="w-6/12 ml-4 flex">
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700 w-40"
          >
            - Temperature:
          </label>
          <div className=" w-full">
            <input
              type="Number"
              disabled={disabled}
              ref={ref}
              value={value}
              {...props}
              className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700 w-6"
          >
            °C
          </label>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="w-6/12 ml-4 flex">
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700 w-28"
          >
            - Breathing:
          </label>
          <div className=" w-4/6">
            <input
              type="Number"
              disabled={disabled}
              ref={ref}
              value={value}
              {...props}
              className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700 w-20"
          >
            times/minute;
          </label>
        </div>
        <div className="w-6/12 ml-4 flex">
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700 w-40"
          >
            - Blood pressure:
          </label>
          <div className="w-2/6">
            <input
              type="Number"
              disabled={disabled}
              ref={ref}
              value={value}
              {...props}
              className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700 w-6"
          >
            /
          </label>
          <div className="w-2/6">
            <input
              type="Number"
              disabled={disabled}
              ref={ref}
              value={value}
              {...props}
              className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700 w-6"
          >
            mmHg
          </label>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="w-6/12 ml-4 flex">
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700 w-20"
          >
            - Height:
          </label>
          <div className=" w-4/6">
            <input
              type="Number"
              disabled={disabled}
              ref={ref}
              value={value}
              {...props}
              className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700 w-20"
          >
            times/minute;
          </label>
        </div>
        <div className="w-6/12 ml-4 flex">
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700 w-20"
          >
            - Weight:
          </label>
          <div className=" w-4/6">
            <input
              type="Number"
              disabled={disabled}
              ref={ref}
              value={value}
              {...props}
              className="appearance-none block w-full border-b-4 border-slate-600 border-dotted  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700 w-6"
          >
            °C
          </label>
        </div>
      </div>
    </div>
  );
});

export default FormInput;
