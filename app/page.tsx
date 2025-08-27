"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Ripple } from "@/components/magicui/ripple";
import { ConfettiFireworks } from "@/components/magicui/confetti";
import { useRef } from "react";
export default function Page() {
  const confettiRef = useRef<{ trigger: () => void }>(null);
  const handlePageClick = () => {
    confettiRef.current?.trigger();
  };

  return (
    <>
      <Header />
      <main
        className="relative flex flex-col items-center justify-center min-h-[100vh] px-4 py-12 bg-background overflow-hidden"
        onClick={handlePageClick}
      >
        {/* Ripple background effect */}
        <Ripple className="absolute inset-0 z-0" />
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 text-center dark:text-amber-50">
            Welcome to FrontendNinjas
          </h1>
          <p className="text-zinc-600 text-lg md:text-xl mb-8 text-center max-w-xl dark:text-amber-50">
            Empowering developers, building community, and sharing open source tools
            for the modern web.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="/about"
              className="px-6 py-3 rounded bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition text-center"
            >
              Learn More
            </a>
            <a
              href="/community"
              className="px-6 py-3 rounded bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition text-center"
            >
              Join Community
            </a>
          </div>
          {/* Confetti Fireworks Button */}
          <ConfettiFireworks ref={confettiRef} />
        </div>
      </main>
      <Footer />
    </>
  );
}
