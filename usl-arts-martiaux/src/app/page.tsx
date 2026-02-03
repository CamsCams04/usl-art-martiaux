"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col px-4 gap-6 w-full justify-center items-center">
      {/* Titre */}
        <h1 className="text-2xl font-bold">USL ART MARTIAUX</h1>

      {/* Description / bouton */}
      <div className="mt-6 text-center max-w-2xl flex flex-col gap-4 items-center">
        <p className="text-gray-600">
          Découvrez et téléchargez notre bulletin d’inscription poour le vide grenier en PDF.
        </p>

        {/* Bouton vers la page PDF */}
        <Link href="/showpdf">
          <button className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors">
            Voir le PDF
          </button>
        </Link>
      </div>
    </div>
  );
}
