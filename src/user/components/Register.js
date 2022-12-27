export default function NavBar() {
  return (
    <div class="flex space-x-10">
      <div class="w-1/2 mx-auto">
        <p class="text-center text-xl font-semibold">Medical register</p>
        <p class="text-center ">
          Please select the information that matches the disease you want to
          check to get the right number.
        </p>
        <div class="mt-4 w-1/2 mx-auto">
          <div>
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Injured parts
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="head" selected>
                head
              </option>
              <option value="hand">hand</option>
              <option value="foot">foot</option>
              <option value="belly">belly</option>
              <option value="backs">backs</option>
              <option value="mouth">mouth</option>
            </select>
          </div>
          <div className="mt-4">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Injured inside or outside
            </label>

            <div class="flex items-center mb-4">
              <input
                id="default-radio-1"
                type="radio"
                value="inside"
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-1"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                inside
              </label>
            </div>
            <div class="flex items-center">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value="outside"
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-2"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                outside
              </label>
            </div>
          </div>
          <div class="mt-4">
            <button
              type="submit"
              // onClick={handleLogin}
              className="w-1/2 mx-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Take Number
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
