import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1 className=" text-4xl">3000</h1>
      <Link href={"/signin"} className=" border px-2 bg-red-200 py-1">
        login
      </Link>
      <Link href={"/dashboard"} className=" border px-2 bg-sky-200 py-1">
        dashboard
      </Link>
    </div>
  );
}
