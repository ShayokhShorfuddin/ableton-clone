import Photo8 from "@/assets/photo-8.jpg";

export default function CTA() {
	return (
		<section className="flex justify-center px-4 pb-20 border-b-2 border-neutral-100">
			<div className="flex flex-col md:flex-row max-w-[70rem] w-full">
				<div className="w-full md:w-1/2">
					<img
						className="w-full h-full object-cover"
						src={Photo8}
						alt="Team working on music"
					/>
				</div>

				<div className="flex justify-center items-center w-full md:w-1/2 bg-[#b1c5ff]">
					<p className="text-lg lg:text-2xl md:max-w-[23rem] font-semibold p-7 lg:p-0">
						We're really proud of the work we've done so far. But there's so
						much more to come. If you'd like to be a part of it, please join us.
					</p>
				</div>
			</div>
		</section>
	);
}
