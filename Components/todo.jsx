import React from "react";

const Todo = (props) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.id + 1}
      </th>
      <td className={`px-6 py-4 ${props.complete ? "line-through" : ""}`}>
        {props.title}
      </td>
      <td className={`px-6 py-4 ${props.complete ? "line-through" : ""}`}>
        {props.description}
      </td>
      <td className="px-6 py-4">{props.complete ? "Completed" : "Pending"}</td>
      <td className="px-6 py-4 flex gap-1">
        <button
          onClick={() => props.deleteTodo(props.mongoId)}
          className="py-2 px-4 bg-red-500 text-white rounded-2xl"
        >
          Delete
        </button>
        {props.complete ? (
          " "
        ) : (
          <button
            onClick={() => props.completeTodo(props.mongoId)}
            className="py-2 px-4 bg-green-500 text-white rounded-2xl"
          >
            Done
          </button>
        )}
      </td>
    </tr>
  );
};

export default Todo;
