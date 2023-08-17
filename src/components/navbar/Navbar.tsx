import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-500 w-10/12 flex justify-between p-2 rounded-xl mx-auto">
        <Link className="text-white font-bold hover:text-black" href="/">Coding</Link>
        <Link className="text-white font-bold back hover:text-black " href="/addTopic">⚠️ Add Topic</Link>
    </nav>
  )
}
