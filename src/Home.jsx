import { useState } from "react";
import { Eye, EyeSlash, Bell } from "@phosphor-icons/react";

function Home() {
	return (
		<>
			<header>
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold">Good morning, Terry</h1>
					<p className="text-lg text-gray-500">Welcome to Neobank</p>
				</div>
				<div className="border border-gray-500 rounded-md p-2">
					<Bell size={24} weight="light" />
				</div>
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