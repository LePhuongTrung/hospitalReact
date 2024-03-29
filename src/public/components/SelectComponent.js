import { forwardRef } from "react";

const SelectComponent = forwardRef((props, ref) => {
  const { label, errors, options } = props;

  return (
    <div>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ref={ref}
        {...props}
      >
        <option
          type="string"
          value={options[0].value}
          defaultValue
          hidden
          disabled
        >
          {options[0].text}
        </option>
        {options.map((option) => (
          <option type="string" key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
        {errors && <p className="text-[#FF0000]">{errors.message}</p>}
      </select>
    </div>
  );
});

export default SelectComponent;
