export default function Hero() {
	return (
		<>
			<HeadingLinks />
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
