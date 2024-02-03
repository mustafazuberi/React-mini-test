import { User } from "@/interfaces";
import DataTable from "../DataTable";

const UsersTable: React.FC<{ users: User[] }> = async ({ users }) => {
  // Mapping data so that we can extract useful keys from the user object.
  const data = users.map(({ email, id, name, website, phone, username }) => ({
    email,
    id,
    name,
    website,
    phone,
    username,
  }));

  return <DataTable data={data} />;
};

export default UsersTable;
