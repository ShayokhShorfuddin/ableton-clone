import GroupPics1 from "@/assets/group-pics-1.png";
import GroupPics2 from "@/assets/group-pics-2.png";
import GroupPics3 from "@/assets/group-pics-3.png";
import Video from "@/assets/video.png";
import Waves from "@/assets/waves.jpg";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import TextBlock from "./components/TextBlock";
import Navbar from "./components/navbar";
import { textBlockData } from "./data";

export default function App() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />

				<TextBlock
					heading={textBlockData[0].heading}
					subHeading={textBlockData[0].subHeading}
				/>

				<img
					className="px-8"
					src={GroupPics1}
					alt="One girl working on music, another one walking."
				/>

				<TextBlock
					heading={textBlockData[1].heading}
					subHeading={textBlockData[1].subHeading}
				/>

				<img
					className="px-4 md:max-w-[45rem] mx-auto"
					src={Video}
					alt="Guy speaking on video"
				/>

				<TextBlock
					heading={textBlockData[2].heading}
					subHeading={textBlockData[2].subHeading}
				/>

				<img
					className="px-8"
					src={GroupPics2}
					alt="Team members working on music"
				/>

				<TextBlock
					heading={textBlockData[3].heading}
					subHeading={textBlockData[3].subHeading}
				/>

				<img className="px-8 mx-auto" src={Waves} alt="Team working on music" />

				<TextBlock
					heading={textBlockData[4].heading}
					subHeading={textBlockData[4].subHeading}
				/>

				<img
					className="px-8"
					src={GroupPics3}
					alt="Team members working on music"
				/>

				<TextBlock
					heading={textBlockData[5].heading}
					subHeading={textBlockData[5].subHeading}
				/>

				<CTA />
			</main>
		</>
	);
}
