import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Instagram } from "lucide-react";

const teamMembers = [
	{
		name: "Sumangal karan",
		role: "Founder & Lead Developer",
		image: "https://avatars.githubusercontent.com/u/123644743?v=4",
		bio: "Passionate about frontend, open source, and building developer communities.",
		github: "https://github.com/Sumangal44",
		linkedin: "https://www.linkedin.com/in/sumangal-karan/",
		instagram: "https://www.instagram.com/sumangal_karan/",
	},
];

export default function TeamPage() {
	return (
		<>
			<Header />
			<main className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-6 sm:py-12 bg-background mt-16">
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-8 text-center dark:text-amber-50">
					Meet the Team
				</h1>
				<div className="grid gap-8 w-full max-w-4xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
					{teamMembers.map((member) => (
						<Card
							key={member.name}
							className="flex flex-col items-center p-6 gap-3"
						>
							<Image
								src={member.image}
								alt={member.name}
								width={96}
								height={96}
								className="rounded-full object-cover mb-2"
							/>
							<span className="font-semibold text-lg">{member.name}</span>
							<Badge
								variant="secondary"
								className="text-xs px-2 py-1 mb-1"
							>
								{member.role}
							</Badge>
							<p className="text-zinc-600 dark:text-zinc-300 text-center text-sm">
								{member.bio}
							</p>
							<div className="flex items-center gap-3 mt-2">
								<a
									href={member.github}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub"
									className="hover:text-black transition"
								>
									<Github className="w-5 h-5" />
								</a>
								<a
									href={member.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn"
									className="hover:text-blue-700 transition"
								>
									<Linkedin className="w-5 h-5" />
								</a>
								<a
									href={member.instagram}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Instagram"
									className="hover:text-pink-600 transition"
								>
									<Instagram className="w-5 h-5" />
								</a>
							</div>
						</Card>
					))}
				</div>
			</main>
			<Footer />
		</>
	);
}