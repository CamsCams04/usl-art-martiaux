import Image from "next/image";
import Link from "next/link";

export default function Card({
  imgSrc,
  title,
  description,
  href,
  target,
  rel,
}: {
  imgSrc?: string;
  title?: string;
  description?: React.ReactNode;
  href?: string; // si présent, la card devient cliquable
  target?: string; // "_blank", "_self", ...
  rel?: string; // "noopener noreferrer"
}) {
  const CardContent = (
    <div className="
      group
      flex flex-col items-center
      w-full max-w-sm
      rounded-2xl
      bg-white
      border border-gray-200
      shadow-sm
      p-6
      transition-all duration-300 ease-out
      hover:-translate-y-1 hover:shadow-lg
      cursor-pointer
    ">
      {imgSrc && (
        <div className="mb-6 rounded-full bg-slate-100 p-4 transition-colors duration-300 group-hover:bg-slate-200">
          <Image
            src={imgSrc}
            alt={title ?? "USL Arts Martiaux"}
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
      )}

      {title && (
        <h2 className="text-xl font-semibold text-slate-800 mb-2 text-center">
          {title}
        </h2>
      )}

      <span className="w-12 h-0.5 bg-slate-400 rounded-full mb-3 transition-all duration-300 group-hover:w-20" />

      {description && (
        <div className="text-slate-600 text-center text-sm leading-relaxed">
          {description}
        </div>
      )}
    </div>
  );

  // Si href existe, on enveloppe dans un lien
  return href ? (
    // Si c'est un lien externe, utiliser <a> pour target="_blank"
    target ? (
      <a href={href} target={target} rel={rel} className="w-full">
        {CardContent}
      </a>
    ) : (
      <Link href={href} className="w-full">
        {CardContent}
      </Link>
    )
  ) : (
    CardContent
  );
}
