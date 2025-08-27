import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const projects = [
	{
		name: "SkeleCLI",
		description: "🚀❤️✅A simple CLI to generate a blueprint for a new project✅👨‍🏭🚀",
		github: "https://github.com/Frontedninjas/SkeleCLI",
		tags: ["React", "CLI", "Library"],
	},
	{
		name: "trivio",
		description: "🎉 Trivio – The Ultimate CLI Quiz Game!",
		github: "https://github.com/Frontedninjas/trivio",
		tags: ["javascript", "Cli", "app"],
	},
    {
        name: "SapphireUI",
		description: "SapphireUI – A Reflex-based UI component library.",
		github: "https://github.com/sapphireUI/SapphireUI",
		tags: ["Python", "bash", "UI","Reflex"],

    }
];

export default function OpensourcePage() {
	return (
		<>
			<Header />
			<main className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-6 sm:py-12 bg-background mt-16">
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-8 text-center dark:text-amber-50">
					Open Source Projects
				</h1>
				<div className="grid gap-6 w-full max-w-3xl mx-auto grid-cols-1 sm:grid-cols-2">
					{projects.map((project) => (
						<Card key={project.name} className="flex flex-col gap-3 p-5">
							<div className="flex items-center gap-2">
								<span className="font-semibold text-lg">{project.name}</span>
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="ml-2 text-zinc-700 hover:text-black transition"
									aria-label={`GitHub: ${project.name}`}
								>
									<Github className="w-5 h-5" />
								</a>
							</div>
							<p className="text-zinc-600 dark:text-zinc-300 text-sm">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-2 mt-2">
								{project.tags.map((tag) => (
									<Badge
										key={tag}
										variant="secondary"
										className="text-xs px-2 py-1"
									>
										{tag}
									</Badge>
								))}
							</div>
						</Card>
					))}
				</div>
			</main>
			<Footer />
		</>
	);
}