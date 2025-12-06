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
			if (nav.name === name) return { ...nav, isActive: !nav.isActive };
			return { ...nav};
		});

		setNavs(newNavs);
	}

	return (
		<ul className="outline">
			{navs.map(nav => {
				const Icon = Icons[nav.icon];

				return <Nav key={nav.name} name={nav.name} Icon={Icon} isActive={nav.isActive} toggleIcon={handleToggleIcon} />;
			})}
		</ul>
	)
}

function Nav ({ name, Icon, isActive, toggleIcon }) {	
	return (
		<li className=""
			onClick={(e) => {
				e.preventDefault();
				toggleIcon(name)
			} >
			<a href="#">
				<Icon
					weight={isActive ? "fill" : "regular"}
					size="1rem"
					color="currentColor"
					/>
				<span>{name}</span>
			</a>
		</li>
	)
}

export default Navigation;
