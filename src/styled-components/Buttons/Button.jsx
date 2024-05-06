import { Link } from "react-router-dom";

export function ButtonBlue({ name, link }) {
  return (
    <Link to={link}>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {name}
      </button>
    </Link>
  );
}

export function ButtonsPurple({ name }) {
  return (
    <button
      type="button"
      class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-8 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    >
      {name}
    </button>
  );
}
