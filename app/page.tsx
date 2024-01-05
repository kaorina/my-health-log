import type { User } from "./types";

async function getUsers() {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-store", //データのキャシュは行わない
  });

  // エラーハンドリングを行うことが推奨されている
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await res.json();
  return data.users as User[];
}

export default async function Home() {
  const users = await getUsers();

  return (
    <div>
      <h1>会員一覧</h1>
      { <ul>
        {users.map((user) => (
          <li key={user.id}>{user.lineUserId}</li>
        ))}
        </ul> }
    </div>
  );
}