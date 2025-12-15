import { useState } from "react";
import { Eye, EyeSlash, Bell } from "@phosphor-icons/react";

function Home() {
	return (
		<div className="px-4">
			<header className="flex items-center justify-between">
				<div className="">
					<h1 className="text-xl font-bold">Good morning, Terry</h1>
					<p className="text-base text-gray-500">Welcome to Neobank</p>
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
		<div className="p-4">
			<p className="text-gray-500">Your balance</p>
			<div className="flex items-center justify-between">
				<p className="text-2xl text-black">$3,200.00</p>
				<button className="" type="button">
					<EyeSlash size={24} weight="regular" />
				</button>
			</div>
			<button className="bg-black text-white text-semibold width-full p-6" type="button">Add money</button>
		</div>
	)
}

export default Home;