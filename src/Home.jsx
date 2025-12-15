import { useState } from "react";
import { Eye, EyeSlash, Bell } from "@phosphor-icons/react";

function Home() {
	return (
		<div className="px-4 mt-8">
			<header className="flex items-center justify-between">
				<div className="">
					<h1 className="text-2xl font-bold text-neutral-950">Good morning, Terry</h1>
					<p className="text-lg text-gray-500">Welcome to Neobank</p>
				</div>
				<button className="border border-gray-500 rounded-md p-2" type="button">
					<Bell size={24} weight="regular" />
				</button>
			</header>

			<main className="">
				<BankBalance />
			</main>
		</div>
	)
}

function BankBalance() {
	return (
		<div className="bg-white p-4">
			<p className="text-gray-500">Your balance</p>
			<div className="flex items-center justify-between mb-2">
				<p className="text-4xl text-neutal-950 font-bold">$3,200.00</p>
				<button className="" type="button">
					<EyeSlash size={24} weight="regular" />
				</button>
			</div>
			<button className="bg-black text-white font-semibold w-full p-4 rounded-xl" type="button">Add money</button>
		</div>
	)
}

export default Home;