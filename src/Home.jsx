import { useState } from "react";
import { Eye, EyeSlash, Bell } from "@phosphor-icons/react";
import Logo from './assets/logo.svg?react'
import MastercardLogo from './assets/mastercard.svg?react'

function Home() {
	return (
		<div className="">
			<header className="flex items-center justify-between">
				<div className="">
					<h1 className="text-2xl font-bold text-neutral-950 tracking-tight">Good morning, Terry</h1>
					<p className="text-lg text-gray-500">Welcome to Neobank</p>
				</div>
				<button className="border border-gray-300 rounded-md p-3" type="button">
					<Bell className="text-black" size={24} weight="regular" color="currentColor"/>
				</button>
			</header>

			<main className="">
				<BankBalance />
				<Card />
			</main>
		</div>
	)
}

function BankBalance() {
	const [viewBalance, setViewBalance] = useState(true);

	function handleViewBalance() {
		if (viewBalance) setViewBalance(false);
		if (!viewBalance) setViewBalance(true);
	}

	return (
		<div className="bg-white p-6 my-6 rounded-[1.5rem]">
			<p className="text-gray-500 mb-2">Your balance</p>
			<div className="flex items-center justify-between mb-6">
				<p className="text-4xl text-neutral-950 font-bold">{viewBalance ? "$3,200.00" : "****"}</p>
				<button className="" type="button" onClick={() => handleViewBalance()}>
					{
						viewBalance ? <Eye className="text-neutral-950" size={24} weight="regular" color="currentColor"/> : <EyeSlash className="text-neutral-950" size={24} weight="regular" color="currentColor"/>
					}
				</button>
			</div>
			<button className="bg-black text-white font-semibold w-full p-4 rounded-[15rem]" type="button">Add money</button>
		</div>
	)
}


function Card() {
	return (
		<div className="p-6">
			<div className="flex items-center justify-betwen">
				<Logo className="w-20 aspect-square"/>
				<MastercardLogo className="w-15"/>
			</div>
			<div className="">
				<div className="">
					<p className="">Debit Card</p>
					<p className="">****4548</p>
				</div>
				<button className="" type="button">
					<Eye className="" size={24} weigh="regular" color="currentColor" />
					<p classmate="">Details</p>
				</button>
			</div>
		</div>
	)
}

export default Home;
