import OneTodoItem from "@/components/OneTodoItem";
import { TodoType } from "@/todoType";

async function fetchTodos() {
  const allTodos = await fetch("http://localhost:3001/api/v1/todos", {
    next: {
      'revalidate': 5
    }
  });
  return allTodos.json();
}

export default async function TodosPage() {
  const allTodos: TodoType[] = await fetchTodos();
  return (
    <div>
      <h1>Todos Page</h1>
      <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
        {allTodos.map((todo) => (
          <OneTodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}
