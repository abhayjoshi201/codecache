import Link from "next/link";
import { Button } from "../ui/button";
import { Github } from "lucide-react";

export const Footer = () => (
	<footer className="w-full border-t bg-background">
		<div className="py-8 px-10 flex flex-col sm:flex-row sm:items-center justify-between">
			<p className="text-center text-sm leading-loose text-muted-foreground sm:text-left">
				Join us in building CodeCache with{" "}
				<a
					href="https://yajushvyas.in"
					target="_blank"
					rel="noreferrer"
					className="font-medium underline underline-offset-4"
				>
					notsoocool
				</a>
				. The source code is available on{" "}
				<a
					href="https://github.com/"
					target="_blank"
					rel="noreferrer"
					className="font-medium underline underline-offset-4"
				>
					GitHub
				</a>
				.
			</p>
			<div className="flex items-center space-x-4 sm:ml-auto">
				<Link href="https://github.com/notsoocool" target="_blank" rel="noreferrer">
					<Button variant="ghost" size="icon">
						<Github className="h-5 w-5" />
						<span className="sr-only">GitHub</span>
					</Button>
				</Link>
			</div>
		</div>
	</footer>
);
