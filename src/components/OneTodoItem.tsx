import { TodoType } from "@/todoType";
import CheckGreen from "./CheckGreen";
import CheckGray from "./CheckGray";
import TodoCheckbox from "./TodoCheckbox";
import Link from "next/link";

export default function OneTodoItem({ todo }: { todo: TodoType }) {
  return (
    <li className="flex items-center">
      {todo.done ? <CheckGreen /> : <CheckGray />}
      <div className="flex items-center mb-4">
        <TodoCheckbox todo={todo} />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
        </label>
      </div>
    </li>
  );
}
