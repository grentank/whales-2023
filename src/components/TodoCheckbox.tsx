"use client";

import { TodoType } from "@/todoType";

function toggleTodo(todoId: number) {
  fetch("http://localhost:3001/api/v1/todos/" + todoId + "/toggle", {
    method: "POST",
  });
}

export default function TodoCheckbox({ todo }: { todo: TodoType }) {
  return (
    <input
      id="default-checkbox"
      type="checkbox"
      defaultChecked={todo.done}
      onChange={(e) => toggleTodo(todo.id)}
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
  );
}
