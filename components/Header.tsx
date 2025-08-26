"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/community", label: "Community" },
	{ href: "/team", label: "Team" },
	{ href: "/opensource", label: "Open Source" },
];

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Prevent background scroll when mobile menu is open
	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [menuOpen]);

	return (
		<header
			className={`w-full px-4 py-3 bg-background flex items-center justify-between fixed top-0 left-0 z-40 transition-all
        ${scrolled ? "backdrop-blur-md bg-background/80 shadow" : ""}`}
		>
			{/* Brand Name */}
			<div className="flex items-center gap-2 min-w-0">
				<Link href="/" className="flex items-center gap-2 min-w-0">
					{/* logo add */}
					<Image
						src="/logo.png"
						width={32}
						height={32}
						alt="FrontendNinjas Logo"
						className="rounded-full object-cover shrink-0"
					/>
					<span className="font-bold text-lg truncate">FrontendNinjas</span>
					<Badge variant="secondary" className="ml-2 text-xs shrink-0">
						Soon
					</Badge>
				</Link>
			</div>

			{/* Desktop Navigation */}
			<nav className="hidden md:flex items-center gap-6">
				{navLinks.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className="font-medium text-zinc-700 dark:text-white px-2 py-1 rounded transition
              hover:text-zinc-900 hover:bg-zinc-100 dark:hover:text-zinc-100 dark:hover:bg-zinc-800"
					>
						{link.label}
					</Link>
				))}
				<ThemeToggleButton />
			</nav>

			{/* Mobile Navigation */}
			<div className="md:hidden flex items-center gap-2">
				<ThemeToggleButton />
				<Button
					variant="ghost"
					size="icon"
					onClick={() => setMenuOpen((open) => !open)}
					aria-label={menuOpen ? "Close menu" : "Open menu"}
				>
					{menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</Button>
			</div>

			{/* Mobile Menu Drawer */}
			<div
				className={`fixed inset-0 z-50 transition-all duration-300 md:hidden ${
					menuOpen ? "visible opacity-100" : "invisible opacity-0"
				}`}
				aria-hidden={!menuOpen}
			>
				<div
					className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
						menuOpen ? "opacity-100" : "opacity-0"
					}`}
					onClick={() => setMenuOpen(false)}
				/>
				<div
					className={`absolute top-0 left-0 h-full bg-background w-3/4 max-w-xs shadow-lg p-6 flex flex-col gap-6 transition-transform duration-300
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
				>
					<div className="flex justify-between items-center mb-4">
						<span className="font-bold text-lg">Menu</span>
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setMenuOpen(false)}
							aria-label="Close menu"
						>
							<X className="w-6 h-6" />
						</Button>
					</div>
					<nav className="flex flex-col gap-4">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="font-medium text-zinc-700 dark:text-white px-2 py-1 rounded transition
                  hover:text-zinc-900 hover:bg-zinc-100 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2"
								onClick={() => setMenuOpen(false)}
							>
								{link.label}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</header>
	);
}