import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import hallmark from "/ableton-hallmark.svg";

export default function Navbar() {
	return (
		<header>
			<nav className="relative flex justify-between xs:justify-start items-center pl-4 xs:py-4 border-b-2 border-neutral-100">
				<img className="w-14" src={hallmark} alt="Ableton Hallmark" />

				<HeadingLinks />

				<div className="xs:hidden">
					<Dropdown />
				</div>
			</nav>
		</header>
	);
}

function HeadingLinks() {
	return (
		<ol className="hidden xs:flex justify-between w-full px-5">
			<li>
				<ol className="flex gap-x-5 text-sm font-semibold">
					<li>
						<a href="/" className="hover:underline">
							Live
						</a>
					</li>
					<li>
						<a href="/" className="hover:underline">
							Push
						</a>
					</li>
					<li>
						<a href="/" className="hover:underline">
							Move
						</a>
					</li>
					<li className="hidden sm:block">
						<a href="/" className="hover:underline">
							Note
						</a>
					</li>
					<li className="hidden sm:block">
						<a href="/" className="hover:underline">
							Link
						</a>
					</li>
					<li className="hidden sm:block">
						<a href="/" className="hover:underline">
							Shop
						</a>
					</li>
					<li className="hidden sm:block">
						<a href="/" className="hover:underline">
							Packs
						</a>
					</li>
					<li className="hidden sm:block">
						<a href="/" className="hover:underline">
							Help
						</a>
					</li>

					<li>
						<a href="/" className="text-[#ff764d]">
							More +
						</a>
					</li>
				</ol>
			</li>

			<li className="hidden lg:block">
				<ol className="flex gap-x-5 text-sm font-semibold">
					<li>
						<a href="/" className="text-[#0000ff]">
							Try Live 12 for free
						</a>
					</li>

					<li>
						<a href="/">Log in or register</a>
					</li>
				</ol>
			</li>
		</ol>
	);
}

function Dropdown() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const closeMenuButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				closeMenuButtonRef.current &&
				!dropdownRef.current.contains(event.target as Node) &&
				!closeMenuButtonRef.current.contains(event.target as Node)
			) {
				setIsMenuOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<>
			{isMenuOpen ? (
				<button
					type="button"
					className="hover:cursor-pointer p-4"
					aria-label="Close menu"
					onClick={() => setIsMenuOpen(false)}
					ref={closeMenuButtonRef}
				>
					<X size={22} />
				</button>
			) : (
				<button
					type="button"
					className="hover:cursor-pointer p-4"
					aria-label="Menu"
					onClick={() => setIsMenuOpen(true)}
				>
					<Menu size={22} />
				</button>
			)}

			{/* Navbar Dropdown */}
			<div
				className={`${isMenuOpen ? "block" : "hidden"} absolute top-full right-0 mr-2 z-50`}
				ref={dropdownRef}
			>
				<NavbarDropdown />
			</div>
		</>
	);
}

function NavbarDropdown() {
	return (
		<div className="border border-stone-700 rounded-xl px-4 py-3 w-min bg-white">
			<ul className="space-y-2.5">
				<li>
					<a href="/">
						<p className="text-sm text-nowrap">Live</p>
					</a>
				</li>
				<li>
					<a href="/">
						<p className="text-sm text-nowrap">Push</p>
					</a>
				</li>
				<li>
					<a href="/">
						<p className="text-sm text-nowrap">Move</p>
					</a>
				</li>
				<li>
					<a href="/">
						<p className="text-sm text-nowrap">Note</p>
					</a>
				</li>
				<li>
					<a href="/">
						<p className="text-sm text-nowrap">Link</p>
					</a>
				</li>
				<li>
					<a href="/">
						<p className="text-sm text-nowrap">Shop</p>
					</a>
				</li>
				<li>
					<a href="/">
						<p className="text-sm text-nowrap">Packs</p>
					</a>
				</li>
				<li>
					<a href="/">
						<p className="text-sm text-nowrap">Help</p>
					</a>
				</li>
			</ul>
		</div>
	);
}
