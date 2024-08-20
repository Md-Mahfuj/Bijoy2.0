import Table from "../app/ui/table";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Table data={users} />
    </main>
  );
}
