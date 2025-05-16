import type { JSX } from "react";

export default function TextBlock({
	heading,
	subHeading,
}: { heading: JSX.Element; subHeading: string }) {
	return (
		<section className="flex justify-center">
			<div className="flex flex-col gap-y-5 px-4 py-26 max-w-2xl">
				{heading}
				<p className="text-sm">{subHeading}</p>
			</div>
		</section>
	);
}
