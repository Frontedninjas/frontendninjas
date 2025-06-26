"use client";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  ChevronRight,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  const [showNotifyForm, setShowNotifyForm] = useState(false);
  const [formState, handleSubmit] = useForm("mgvypgde"); // Your Formspree ID
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full border border-gray-200"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full border border-gray-200"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full border border-gray-200"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full border border-gray-200"></div>
        <div className="absolute top-60 left-1/3 w-20 h-20 rounded-full border border-gray-200"></div>
        <div className="absolute top-32 right-1/3 w-36 h-36 rounded-full border border-gray-200"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 pt-8 pb-4">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="flex items-center gap-2 bg-zinc-800 text-white px-4 py-2 rounded-full">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <Image
                src="logo.svg"
                width={500}
                height={500}
                alt="logo"
                className="w-5 h-5 rounded-full object-cover"
              />
            </div>
            <span className="font-semibold text-lg">FrontedNinjas</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
        <div className="mb-8 text-6xl">👍</div>

        <div className="text-center mb-12">
          <p className="text-gray-700 text-sm font-medium tracking-wider uppercase mb-4">
            WE&apos;RE STILL
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 mb-6">
            Cooking Our Website.
          </h1>
          <div className="text-gray-600 text-lg md:text-xl max-w-md mx-auto">
            <p>We are going to launch our website Very Soon.</p>
            <p>Stay Tune.</p>
          </div>
        </div>

        <Button
          onClick={() => setShowNotifyForm(true)}
          className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-6 rounded-full text-lg font-medium flex items-center gap-3 shadow-lg"
        >
          <Mail className="w-5 h-5" />
          Notify Me
          <ChevronRight className="w-5 h-5" />
        </Button>
      </main>

      {/* Footer */}
      <footer className="relative z-10 pb-8">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="flex items-center gap-4">
            <a href="https://github.com/Frontedninjas" target="_blank" className="social-icon">
              <Github className="w-5 h-5 text-gray-700" />
            </a>
            <a href="https://www.linkedin.com/company/frontedninjas/" target="_blank" className="social-icon">
              <Linkedin className="w-5 h-5 text-blue-600" />
            </a>
            <a href="https://www.instagram.com/frontedninjas/" target="_blank" className="social-icon">
              <Instagram className="w-5 h-5 text-pink-600" />
            </a>
            <a href="https://x.com/frontedninjas" target="_blank" className="social-icon">
              <Twitter className="w-5 h-5 text-blue-400" />
            </a>
          </div>
        </div>
      </footer>

      {/* Modal Form using Formspree */}
      {showNotifyForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowNotifyForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🔔</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Get Notified!
              </h3>
              <p className="text-gray-600">
                Be the first to know when we launch our website.
              </p>
            </div>

            {formState.succeeded ? (
              <div className="text-center">
                <div className="text-4xl mb-4">✅</div>
                <p className="text-green-600 font-medium">
                  Thank you! You&apos;ll be notified soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Enter your email address"
                  />
                  <ValidationError prefix="Email" field="email" errors={formState.errors} />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Type something..."
                    rows={3}
                  />
                  <ValidationError prefix="Message" field="message" errors={formState.errors} />
                </div>

                <Button
                  type="submit"
                  disabled={formState.submitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
                >
                  {formState.submitting ? "Submitting..." : "Notify Me"}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
