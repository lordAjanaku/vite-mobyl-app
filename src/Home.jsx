import { useState } from "react";
import { Eye, EyeSlash, Bell } from "@phosphor-icons/react";

function Home() {
	return (
		<>
			<header className="flex items-center justify-between">
				<div className="">
					<h1 className="text-xl font-bold">Good morning, Terry</h1>
					<p className="text-lg text-gray-500">Welcome to Neobank</p>
				</div>
				<button className="border-2 border-gray-500 rounded-md p-2" type="button">
					<Bell size={24} weight="light" />
				</button>
			</header>

			<main className="">
				<BankBalance />
			</main>
		</>
	)
}

function BankBalance() {
	return (
		<div className="">
			
		</div>
	)
}

export default Home;