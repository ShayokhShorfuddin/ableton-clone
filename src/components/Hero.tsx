import Wordmark from "@/assets/ableton-wordmark.svg";
import HeadingImage from "@/assets/header.avif";

export default function Hero() {
	return (
		<>
			<HeadingLinks />
			<Heading />
		</>
	);
}

function HeadingLinks() {
	return (
		<ul className="sticky top-0 z-10 flex gap-x-4 p-6 text-sm font-semibold bg-white">
			<li>
				<a href="/" className="hover:underline text-[#ff764d]">
					About
				</a>
			</li>
			<li>
				<a href="/" className="hover:underline">
					Jobs
				</a>
			</li>
			<li>
				<a href="/" className="hover:underline">
					Apprenticeships
				</a>
			</li>
		</ul>
	);
}

function Heading() {
	return (
		<div className="relative flex justify-center overflow-hidden">
			<img
				src={HeadingImage}
				alt="Man working on music equipment"
				className="min-h-[35rem] w-auto px-4 object-cover"
			/>
			<img
				className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[13rem] sm:w-[20rem] md:w-[28rem]"
				src={Wordmark}
				alt=""
			/>
		</div>
	);
}
