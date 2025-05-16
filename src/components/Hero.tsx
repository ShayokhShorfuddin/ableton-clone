import Wordmark from "@/assets/ableton-wordmark.svg";
import HeadingImage from "@/assets/header.jpg";

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
		<ol className="flex gap-x-4 p-4 text-sm font-semibold">
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
		</ol>
	);
}

function Heading() {
	return (
		<div className="relative flex justify-center min-h-[35rem] px-4 overflow-hidden">
			<img
				src={HeadingImage}
				alt="Man working on music equipment"
				className="w-auto object-cover"
			/>
			<img
				className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[13rem] sm:w-[20rem] md:w-[28rem]"
				src={Wordmark}
				alt=""
			/>
		</div>
	);
}
