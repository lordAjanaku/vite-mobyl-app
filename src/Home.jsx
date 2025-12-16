import { useState } from "react";
import { Eye, EyeSlash, Bell } from "@phosphor-icons/react";

function Home() {
	return (
		<div className="">
			<header className="flex items-center justify-between">
				<div className="">
					<h1 className="text-2xl font-bold text-neutral-950">Good morning, Terry</h1>
					<p className="text-lg text-gray-500">Welcome to Neobank</p>
				</div>
				<button className="border border-gray-300 rounded-md p-3" type="button">
					<Bell className="text-black" size={24} weight="regular" color="currentColor"/>
				</button>
			</header>

			<main className="">
				<BankBalance />
			</main>
		</div>
	)
}

function BankBalance() {
	const [viewBalance, setViewBalance] = useState(false);

	function handleViewBalance() {
		if (viewBalance) setViewBalance(false);
		if (!viewBalance) setViewBalance(true);
	}

	return (
		<div className="bg-white p-6 my-6 rounded-[2rem]">
			<p className="text-gray-500">Your balance</p>
			<div className="flex items-center justify-between mb-4">
				<p className="text-4xl text-neutral-950 font-bold">$3,200.00</p>
				<button className="" type="button" onClick={() => handleViewBalance()}>
					{
						viewBalance ? <EyeSlash className="text-neutral-950" size={24} weight="regular" color="currentColor"/> : <Eye className="text-neutral-950" size={24} weight="regular" color="currentColor"/>
					}
				</button>
			</div>
			<button className="bg-black text-white font-semibold w-full p-4 rounded-[15rem]" type="button">Add money</button>
		</div>
	)
}

export default Home;