import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between text-6xl bg-green-500 p-7">
      <h1>Cookie Stand Admin</h1>
      <nav className="flex items-center">
        <Link href="/overview" className="px-2 py-1 text-2xl rounded bg-green-50">Overview</Link>
      </nav>
    </header>
  );
}