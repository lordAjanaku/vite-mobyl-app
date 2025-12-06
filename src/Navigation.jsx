import { useState } from "react"
import * as Icons from "@phosphor-icons/react"

const navObject = [
	{ name: "Home", icon: "House", isActive: false },
	{ name: "Search", icon: "MagnifyingGlass", isActive: false },
	{ name: "Profile", icon: "User", isActive: false },
	{ name: "Settings", icon: "Gear", isActive: false },
	{ name: "Help", icon: "Question", isActive: false },
]

function Navigation () {
	const [navs, setNavs] = useState(navObject)

	return (
		<ul className="outline">
			{navs.map(nav => {
				const Icon = Icons[nav.icon];

				return <Nav key={nav.name} name={nav.name} Icon={Icon} isActive={nav.isActive} setNavs={setNavs} />;
			})}
		</ul>
	)
}

function Nav ({ name, Icon, isActive, setNavs }) {
	return (
		<li className="">
			<a href="#">
				<Icon weight="regular" size="1.5rem" color="currentColor" />
				<span>{name}</span>
			</a>
		</li>
	)
}

export default Navigation;
