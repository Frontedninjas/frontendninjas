"use client";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  ChevronRight,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function ComingSoon() {
  const [showNotifyForm, setShowNotifyForm] = useState(false);
  const [formState, handleSubmit] = useForm("mgvypgde");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-zinc-50 relative overflow-hidden text-zinc-800">
      {/* Background Circles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-20 w-32 h-32 rounded-full border border-zinc-200 " />
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full border border-zinc-200" />
        <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full border border-zinc-200" />
        <div className="absolute top-2/3 right-1/3 w-24 h-24 rounded-full border border-zinc-200" />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-8 pb-4">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-full shadow-md">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <Image
                src="/logo.svg"
                width={500}
                height={500}
                alt="logo"
                className="w-5 h-5 rounded-full object-cover"
              />
            </div>
            <span className="font-semibold text-lg italic">FrontedNinjas</span>
            <Badge variant="secondary" className="ml-2 text-xs italic">Soon</Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
<main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4 text-center">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="w-full max-w-xl"
  >
    <div className="text-6xl mb-4">🚀</div>
    <p className="text-zinc-600 text-sm tracking-widest uppercase mb-2">We&apos;re Still</p>
    <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 italic">Cooking Our Website</h1>
    <p className="text-zinc-700 text-base md:text-lg mb-6">
      We&apos;re launching soon. Be the first to know!
    </p>

    <div className="flex justify-center">
      <Button
        onClick={() => setShowNotifyForm(true)}
        className="bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-4 rounded-full text-lg font-normal flex items-center italic gap-2 shadow-lg"
      >
        <Mail className="w-4 h-4 " />
        Notify Me
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  </motion.div>
</main>

      {/* Footer */}
      <footer className="relative z-10 pb-10">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="flex items-center gap-4">
            <a href="https://github.com/Frontedninjas" target="_blank">
              <Github className="w-6 h-6 text-zinc-600 hover:text-black" />
            </a>
            <a href="https://www.linkedin.com/company/frontedninjas/" target="_blank">
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a href="https://www.instagram.com/frontedninjas/" target="_blank">
              <Instagram className="w-6 h-6 text-pink-500" />
            </a>
            <a href="https://x.com/frontedninjas" target="_blank">
              <Twitter className="w-6 h-6 text-sky-500" />
            </a>
          </div>
        </div>
      </footer>

      {/* Modal Form */}
      <AnimatePresence>
        {showNotifyForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
          >
            <Card className="relative w-full max-w-md shadow-xl">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowNotifyForm(false)}
                className="absolute top-2 right-2 text-zinc-500 hover:text-zinc-800"
              >
                <X className="w-6 h-6" />
              </Button>
              <CardContent className="py-6 px-4 sm:px-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🔔</div>
                  <h2 className="text-2xl font-bold italic">Get Notified</h2>
                  <p className="text-zinc-500 text-sm">
                    Be the first to know when we launch!
                  </p>
                </div>

                {formState.succeeded ? (
                  <div className="text-center py-4">
                    <div className="text-3xl mb-2">✅</div>
                    <p className="text-green-600 font-medium">
                      Thank you! You&apos;ll be notified soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1 text-center italic">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-zinc-800 focus:outline-none"
                        placeholder="you@example.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={formState.errors} />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1 text-center italic">
                        Message (optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full  px-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-zinc-800 focus:outline-none"
                        placeholder="Leave us a message"
                      />
                      <ValidationError prefix="Message" field="message" errors={formState.errors} />
                    </div>

                    <Button
                      type="submit"
                      className="w-full italic bg-zinc-900 hover:bg-zinc-800 text-white py-3 rounded-md font-medium"
                      disabled={formState.submitting}
                    >
                      {formState.submitting ? "Submitting..." : "Notify Me"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
