import { TableUser, User } from "@/interfaces";
import DataTable from "@/shared/DataTable";

const USERS_API_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

const page = async () => {
  const res = await fetch(USERS_API_ENDPOINT);
  const users: User[] = await res.json();
  if (!users) return null;

  const tableUsers: TableUser[] = users.map(
    ({ email, id, name, website, phone, username }) => ({
      email,
      id,
      name,
      website,
      phone,
      username,
    })
  );

  return (
    <main className="px-8">
      <DataTable data={tableUsers} searchApplicableKey="email" />;
    </main>
  );
};

export default page;
