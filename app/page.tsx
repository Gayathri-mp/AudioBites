"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate heading
            if (headingRef.current) {
              headingRef.current.style.transition = "all 3s ease";
              headingRef.current.style.opacity = "1";
              headingRef.current.style.transform = "translateX(0)";
            }

            // Animate button
            if (btnRef.current) {
              btnRef.current.style.transition = "opacity 3s ease-in-out 0.5s";
              btnRef.current.style.opacity = "1";
            }

            if (sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* Home Section */}
      <section
        id="page-home"
        className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-black text-white selection:bg-[#C4AE45] selection:text-black"
      >
        <div className="relative w-[350px] h-[350px] mb-[30px]">
          <Image
            src="/LOGO2.svg"
            alt="AUDIOBITES Logo"
            fill
            priority
            className="object-contain relative z-10 drop-shadow-[0_0_10px_rgba(60,96,132,0.854)] animate-float"
          />
          <svg className="absolute top-0 left-0 w-full h-full z-0" viewBox="0 0 200 200">
            <circle className="fill-[#0f0c27] animate-grow" cx="100" cy="100" r="40" />
          </svg>
        </div>

        <div className="opacity-0 animate-fade-in relative z-10">
          <h1
            className="font-libre text-[80px] text-white mb-[10px]"
            style={{ textShadow: "5px 4px 10px #c4ae45" }}
          >
            AUDIOBITES
          </h1>
          <p className="font-love text-[30px] text-white">Where Food Meets Music</p>
        </div>

        <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-full h-[320px] bg-gradient-to-r from-[#43116A] to-[#0A1832] rounded-full blur-[50px] z-0"></div>
      </section>

      {/* General Section */}
      <section
        id="page-general"
        ref={sectionRef}
        className="bg-gradient-to-b from-[#d4af37] to-[#350f0f] text-white min-h-screen flex justify-between items-center relative overflow-hidden px-8 m-0 p-0"
      >
        <div className="max-w-[600px] ml-[150px] relative z-10 w-full">
          <h1
            ref={headingRef}
            className="font-abril text-[100px] leading-[1.1] mb-5 text-white opacity-0 -translate-x-[90px]"
          >
            Craving flavors
            <br />
            That SING?
          </h1>
          <p className="font-almendra text-[50px] mb-10 text-white leading-tight">
            Let your taste buds and soul harmonize here
          </p>
          <button
            ref={btnRef}
            onClick={() => router.push("/team")}
            className="bg-transparent border-2 border-[#C4AE45] text-[#C4AE45] px-7 py-3 text-lg rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#C4AE45] hover:text-black relative left-[100px] opacity-0"
          >
            Explore
          </button>
        </div>
        <div className="relative z-10 mr-[100px] flex-shrink-0">
          <Image
            src="/gen-01.svg"
            alt="Illustration"
            width={600}
            height={600}
            className="w-[600px] h-auto block mb-[50px]"
          />
        </div>
      </section>
    </>
  );
}
