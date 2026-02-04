import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center w-full py-4 px-8 border-b-3 border-gray-200">
      <Link href="/" className="flex gap-4 items-center">
        <Image
          src="/assets/logo.png"
          alt="Logo USL Arts Martiaux"
          width={48}
          height={48}
          className="rounded-full shadow-sm"
        />
        <h1 className="text-2xl font-bold">USL Arts Martiaux</h1>
      </Link>
    </header>
  );
}
