import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ComicText } from "@/components/magicui/comic-text";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Github, Linkedin, Instagram } from "lucide-react";

const communityMembers = [
	{
		name: "Sumangal Karan",
		role: "Founder",
		image: "https://avatars.githubusercontent.com/u/123644743?v=4",
		bio: "Passionate about frontend, open source, and building developer communities.",
		github: "https://github.com/Sumangal44",
		linkedin: "https://www.linkedin.com/in/sumangal-karan/",
		instagram: "https://www.instagram.com/sumangal_karan/",
	},
	{
		name: "Alex Ninja",
		role: "Contributor",
		image: "/team/alex.png",
		bio: "Loves building UI components and sharing knowledge.",
		github: "#",
		linkedin: "#",
		instagram: "#",
	},
	{
		name: "Jamie Script",
		role: "Community Helper",
		image: "/team/jamie.png",
		bio: "Always ready to help and connect people.",
		github: "#",
		linkedin: "#",
		instagram: "#",
	},
];

export default function CommunityPage() {
	return (
		<>
			<Header />
			<main className="flex flex-col items-center justify-center min-h-[88vh] px-4 py-6 sm:py-12 bg-background">
				<ComicText
					fontSize={2}
					className="text-xs sm:text-xs md:text-5xl mt-6 mb-6 text-center"
				>
					Join Our Community!
				</ComicText>
				<Card className="w-full max-w-xl mx-auto p-4 sm:p-6 flex flex-col items-center gap-4 shadow-lg">
					<Badge variant="secondary" className="mb-2 text-base px-3 py-1">
						Open & Inclusive
					</Badge>
					<p className="text-zinc-700 dark:text-zinc-200 text-center text-base sm:text-lg">
						FrontendNinjas is more than just a group—it&apos;s a vibrant,
						supportive community for frontend developers and designers of all
						skill levels.
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
				<div className="w-full max-w-4xl mx-auto mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
					{communityMembers.map((member) => (
						<Card
							key={member.name}
							className="flex flex-col items-center p-6 gap-3"
						>
							<Image
								src={member.image}
								alt={member.name}
								width={80}
								height={80}
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

