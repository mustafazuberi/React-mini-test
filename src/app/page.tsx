import { User } from "@/interfaces";
import UsersTable from "@/shared/UsersDataTable";

const USERS_API_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

const page = async () => {
  const res = await fetch(USERS_API_ENDPOINT);
  const users: User[] = await res.json();

  if (!users) return null;

  return (
    <main className="p-10 flex flex-col gap-y-6">
      <h1 className="text-3xl text-black font-extrabold text-center">
        React Mini Test
      </h1>
      <UsersTable users={users} />
    </main>
  );
};

export default page;
