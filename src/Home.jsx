import { useState } from "react";
import { Eye, EyeSlash, Bell } from "@phosphor-icons/react";

function Home() {
	return (
		<div className="px-6">
			<header className="flex items-center justify-between">
				<div className="">
					<h1 className="text-base font-bold">Good morning, Terry</h1>
					<p className="text-base text-gray-500">Welcome to Neobank</p>
				</div>
				<button className="border-2 border-gray-500 rounded-md p-2" type="button">
					<Bell size={24} weight="light" />
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
		<div className="">
			
		</div>
	)
}

export default Home;