"use client";
import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full px-4 py-6 bg-background ">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <div className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} FrontendNinjas. All rights reserved.
        </div>
        <div className="flex items-center gap-4 justify-center">
          <Link
            href="https://github.com/Frontedninjas"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-black transition"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/frontedninjas/"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.instagram.com/frontedninjas/"
            target="_blank"
            aria-label="Instagram"
            className="hover:text-pink-600 transition"
          >
            <Instagram className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}