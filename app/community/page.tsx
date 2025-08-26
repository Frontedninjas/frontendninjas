import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ComicText } from "@/components/magicui/comic-text";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[88vh] px-4 py-6 sm:py-12 bg-background">
        <ComicText fontSize={2} className="text-xs sm:text-xs md:text-5xl mt-6 mb-6 text-center">
          Join Our Community!
        </ComicText>
        <Card className="w-full max-w-xl mx-auto p-4 sm:p-6 flex flex-col items-center gap-4 shadow-lg">
          <Badge variant="secondary" className="mb-2 text-base px-3 py-1">
            Open & Inclusive
          </Badge>
          <p className="text-zinc-700 dark:text-zinc-200 text-center text-base sm:text-lg">
            FrontendNinjas is more than just a group—it&apos;s a vibrant, supportive
            community for frontend developers and designers of all skill levels.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 text-center text-sm sm:text-base">
            Share ideas, ask questions, collaborate on open source, and make new
            friends. We host events, discussions, and provide resources to help
            you grow.
          </p>
          <a
            href="https://discord.gg/frontendninjas"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 sm:px-6 sm:py-3 rounded bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition text-center w-full sm:w-auto"
          >
            Join Our Discord
          </a>
        </Card>
      </main>
      <Footer />
    </>
  );
}

