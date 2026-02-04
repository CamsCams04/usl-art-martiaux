"use client";

import Card from "@/components/card/card";
import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setContactVisible(true),
      { threshold: 0.2 }
    );

    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-6xl flex flex-col gap-16 px-4 sm:px-6 md:px-8">

      {/* HERO */}
      <section className="w-full text-center py-12 sm:py-16 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 shadow-sm">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800">
          USL Arts Martiaux
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
          Description courte du club
        </p>
      </section>

      {/* ACTUALITÉS */}
      <section
        ref={sectionRef}
        className={`flex flex-col items-center transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center">
          Actualités du club
        </h2>

        <div className="w-16 h-1 bg-slate-500 rounded-full mt-3 mb-10" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 w-full px-2 sm:px-0">
          <Card
            imgSrc="/assets/logo.png"
            title="Vide-grenier"
            description={
              <>
                <p>Dimanche 19 Avril 2026</p>
                <p>Vide-grenier organisé par l&apos;USL Arts Martiaux.</p>
                <p>Téléchargez le bulletin d&apos;inscription.</p>
              </>
            }
            href="/showpdf"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section
        ref={contactRef}
        className={`flex flex-col items-center transition-all duration-700 ease-out
          ${contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center">
          Retrouvez-nous
        </h2>

        <div className="w-16 h-1 bg-slate-500 rounded-full mt-3 mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full px-2 sm:px-0">
          {/* Carte Facebook */}
          <Card
            title="Facebook"
            description={
              <div className="flex items-center justify-center">
                <FaFacebookF className="text-blue-600 mr-2 inline-block" />
                <p className="text-slate-700 hover:text-slate-900 transition-colors">
                  Suivez-nous sur Facebook
                </p>
              </div>
            }
            href="https://www.facebook.com/p/Page-Usl-Arts-Martiaux-100054558665152/"
            target="_blank"
            rel="noopener noreferrer"
          />


          {/* Carte Email */}
          <Card
            title="Email"
            description={
              <div className="flex items-center justify-center">
                <FaEnvelope className="text-slate-700 mr-2 inline-block" />
                <p
                  className="text-slate-700 hover:text-slate-900 transition-colors"
                >
                  uslartsmartiaux@gmail.com
                </p>
              </div>
            }
            href="mailto:uslartsmartiaux@gmail.com"
          />
        </div>
      </section>

    </div>
  );
}
