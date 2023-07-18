import { TodoType } from "@/todoType";

async function getOneTodo(id: number) {
  return fetch("http://localhost:3001/api/v1/todos/" + id).then((res) =>
    res.json()
  );
}

export default async function OneTodoPage({
  params,
}: {
  params: { id: number };
}) {
  const todo: TodoType = await getOneTodo(params.id);
  return <div>{todo.body}</div>;
}

export async function generateStaticParams() {
  const todos: TodoType[] = await fetch(
    "http://localhost:3001/api/v1/todos"
  ).then((res) => res.json());

  const ids = todos.map((todo) => ({
    id: `${todo.id}`,
  }));
  // console.log(ids)

  return ids;
}
