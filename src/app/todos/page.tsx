import { User } from "@/interfaces";
import DataTable from "@/shared/DataTable";

const TODOS_API_ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

const page = async () => {
  const res = await fetch(TODOS_API_ENDPOINT);
  const todos: User[] = await res.json();

  if (!todos) {
    return null;
  }

  return (
    <main className="px-8">
      <DataTable data={todos} searchApplicableKey="title" />;
    </main>
  );
};

export default page;
