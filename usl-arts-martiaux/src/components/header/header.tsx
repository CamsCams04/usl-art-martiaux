import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center w-full py-4 px-8 border-b-3 border-gray-200">
      <div className="flex gap-4 items-center">
        <Image
          src="/assets/logo.png"
          alt="Logo USL art martiaux"
          width={48}
          height={48}
        />
        <h1 className="text-2xl font-bold">USL ART MARTIAUX</h1>
      </div>
    </header>
  );
}
