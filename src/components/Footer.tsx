import Wordmark2 from "@/assets/ableton-wordmark-2.svg";
import Discord from "@/assets/discord.svg";
import Facebook from "@/assets/facebook.svg";
import Insta from "@/assets/insta.svg";
import Tiktok from "@/assets/tiktok.svg";
import Twitter from "@/assets/twitter.svg";
import Youtube from "@/assets/youtube.svg";
import hallmark from "/ableton-hallmark.svg";

import { ChevronRight } from "lucide-react";

export default function Footer() {
	return (
		<footer className="py-20 px-5 sm:px-20">
			<img className="w-46" src={Wordmark2} alt="Wordmark of Ableton" />

			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-16 w-full">
				<AboutAbleton />
				<Education />

				<div className="order-first md:order-none">
					<Newsletter />
				</div>

				<Community />
				<LocationAndLanguage />
			</section>

			<FooterLinks />
		</footer>
	);
}

function AboutAbleton() {
	return (
		<div className="flex flex-col">
			<a className="flex items-center gap-x-1 font-semibold" href="/">
				Register Live
				<ChevronRight size={13} />
			</a>

			<a className="flex items-center gap-x-1 font-semibold" href="/">
				About Ableton
				<ChevronRight size={13} />
			</a>

			<a className="flex items-center gap-x-1 font-semibold" href="/">
				Jobs
				<ChevronRight size={13} />
			</a>

			<Socials />
		</div>
	);
}

function Socials() {
	return (
		<ul className="flex gap-x-3 mt-5">
			<li>
				<img className="size-9" src={Facebook} alt="Facebook" />
			</li>

			<li>
				<img className="size-9" src={Twitter} alt="Twitter" />
			</li>

			<li>
				<img className="size-9" src={Youtube} alt="Youtube" />
			</li>

			<li>
				<img className="size-9" src={Insta} alt="Instagram" />
			</li>

			<li>
				<img className="size-9" src={Tiktok} alt="TikTok" />
			</li>

			<li>
				<img className="size-9" src={Discord} alt="Discord" />
			</li>
		</ul>
	);
}

function Education() {
	return (
		<div className="flex flex-col">
			<p className="mb-1 font-bold text-xl">Education</p>

			<a className="flex items-center gap-x-1 font-semibold" href="/">
				Offers for students and teachers
				<ChevronRight size={13} />
			</a>

			<a className="flex items-center gap-x-1 font-semibold" href="/">
				Ableton for the Classroom
				<ChevronRight size={13} />
			</a>

			<a className="flex items-center gap-x-1 font-semibold" href="/">
				Ableton for Colleges and Universities
				<ChevronRight size={13} />
			</a>
		</div>
	);
}

function Newsletter() {
	return (
		<div className="flex flex-col">
			<p className="mb-1 font-bold text-xl">Sign up to our newsletter.</p>
			<p>
				Enter your email address to stay up to date with the latest offers,
				tutorials, downloads, surveys and more.
			</p>

			<form className="flex mt-4">
				<input
					type="email"
					placeholder="Email Address"
					className="w-full p-2 bg-[#EEEEEE]"
				/>
				<button
					type="button"
					className="hover:cursor-pointer bg-amber-400 font-bold px-4 text-nowrap"
				>
					Sign Up
				</button>
			</form>
		</div>
	);
}

function Community() {
	return (
		<div className="flex flex-col">
			<p className="mb-1 font-bold text-xl">Community</p>

			<a className="flex items-center gap-x-1 font-semibold" href="/">
				Find Ableton User Groups
				<ChevronRight size={13} />
			</a>

			<a className="flex items-center gap-x-1 font-semibold" href="/">
				Find Certified Training
				<ChevronRight size={13} />
			</a>

			<a className="flex items-center gap-x-1 font-semibold" href="/">
				Become a Certified Trainer
				<ChevronRight size={13} />
			</a>
		</div>
	);
}

function LocationAndLanguage() {
	return (
		<div className="flex flex-col">
			<p className="mb-1 font-bold text-xl">Location and Language</p>
			<div className="flex gap-x-2">
				<select className="p-2 bg-[#EEEEEE] px-5">
					<option value="en">English</option>
					<option value="de">Deutsch</option>
					<option value="fr">Français</option>
					<option value="es">Español</option>
					<option value="ja">日本語</option>
				</select>

				<select className="p-2 bg-[#EEEEEE] px-5">
					<option value="us">United States</option>
					<option value="de">Germany</option>
					<option value="fr">France</option>
					<option value="es">Spain</option>
					<option value="jp">Japan</option>
				</select>
			</div>
		</div>
	);
}

function FooterLinks() {
	return (
		<div className="flex flex-wrap gap-y-5 gap-x-5 justify-between pt-14 md:pt-20">
			<ul className="flex flex-wrap gap-x-4 md:items-center text-nowrap">
				<li>
					<a href="/" className="hover:underline text-sm font-semibold">
						Contact Us
					</a>
				</li>
				<li>
					<a href="/" className="hover:underline text-sm font-semibold">
						Press Resources
					</a>
				</li>
				<li>
					<a href="/" className="hover:underline text-sm font-semibold">
						Legal Info
					</a>
				</li>
				<li>
					<a href="/" className="hover:underline text-sm font-semibold">
						Corporate Information
					</a>
				</li>
				<li>
					<a href="/" className="hover:underline text-sm font-semibold">
						Privacy Policy
					</a>
				</li>
				<li>
					<a href="/" className="hover:underline text-sm font-semibold">
						Cookie Settings
					</a>
				</li>
				<li>
					<a href="/" className="hover:underline text-sm font-semibold">
						Imprint
					</a>
				</li>
			</ul>

			<div className="flex gap-x-3 items-center">
				<p className="text-sm font-semibold">Made in Berlin</p>
				<img src={hallmark} alt="Hallmark of Ableton" />
			</div>
		</div>
	);
}
