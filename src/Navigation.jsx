import { useState } from "react"
import * as Icons from "@phosphor-icons/react"

const navObject = [
	{ name: "Home", icon: "House", isActive: false },
	{ name: "Map", icon: "MapTrifold", isActive: false },
	{ name: "Transfer", icon: "ArrowsLeftRight", isActive: false },
	{ name: "Settings", icon: "GearSix", isActive: false },
	{ name: "Profile", icon: "UserCircle", isActive: false },
]

function Navigation () {
	const [navs, setNavs] = useState(navObject);

	function handleToggleIcon (name) {
		const newNavs = navs.map(nav => {
			if (nav.name === name) return { ...nav, isActive: true };
			return { ...nav, isActive: false};
		});

		setNavs(newNavs);
	}

	return (
		<ul className="grid grid-cols-5 items-center gap-2 text-sm fixed bottom-0 rounded-t-[5rem] shadow-[0_-8px_25px_rgba(0,0,0,0.07)]" >
			{navs.map(nav => {
			const Icon = Icons[nav.icon];

			return <Nav key={nav.name}name={nav.name} Icon={Icon} isActive={nav.isActive} toggleIcon={handleToggleIcon} />;
		})}
		</ul>
	)
}

function Nav ({ name, Icon, isActive, toggleIcon }) {	
	return (
		<li className={`${isActive ? "text-gray-300" : "text-gray-900"}}`
			onClick={(e) => {
				e.preventDefault();
				toggleIcon(name);
			}} >
			<a className="flex flex-col justify-center items-center py-8 px-6" href="#">
				<Icon
					weight={isActive ? "fill" : "regular"}
					size="1.5rem"
					color="currentColor"
					/>
				<span>{name}</span>
			</a>
		</li>
	)
}

export default Navigation;
