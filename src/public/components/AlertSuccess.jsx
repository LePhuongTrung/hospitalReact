import { Alert } from "@material-tailwind/react";
import { BiError } from "react-icons/bi";

export default function Example() {
  return (
    <Alert
      icon={
        <BiError
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </BiError>
      }
      className="bg-red-600"
    >
      <h>A simple alert with icon for showing message.</h>
    </Alert>
  );
}
