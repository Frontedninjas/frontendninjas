import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[88vh] px-4 py-6 sm:py-12 bg-background">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-4 text-center dark:text-amber-50">
          About FrontendNinjas
        </h1>
        <p className="text-zinc-600 text-base sm:text-lg md:text-xl mb-8 text-center max-w-2xl dark:text-amber-50">
          FrontendNinjas is a passionate community of developers, designers, and
          creators focused on building modern web experiences. We believe in open
          source, collaboration, and empowering everyone to learn and grow
          together.
        </p>
        <div className="w-full max-w-xl text-center text-zinc-700 dark:text-zinc-200 space-y-4">
          <p>
            Our mission is to share knowledge, create innovative tools, and foster
            a welcoming environment for all skill levels.
          </p>
          <p>
            Whether you&apos;re just starting out or you&apos;re a seasoned pro,
            you&apos;ll find resources, support, and inspiration here.
          </p>
          <p>Join us as we shape the future of frontend development!</p>
        </div>
      </main>
      <Footer />
    </>
  );
}