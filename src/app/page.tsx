import { TableUser, User } from "@/interfaces";
import DataTable from "@/shared/DataTable";

const USERS_API_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

const page = async () => {
  const res = await fetch(USERS_API_ENDPOINT);
  const users: User[] = await res.json();

  if (!users) return null;

  return (
    <main className="px-8">
      <UsersTable users={users} />
    </main>
  );
};

export default page;

const UsersTable: React.FC<{ users: User[] }> = async ({ users }) => {
  const data: TableUser[] = users.map(
    ({ email, id, name, website, phone, username }) => ({
      email,
      id,
      name,
      website,
      phone,
      username,
    })
  );

  return <DataTable data={data} searchApplicableKey="email" />;
};

// dummy change