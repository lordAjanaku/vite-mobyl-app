import { useState } from "react";
import { Eye, EyeSlash, Bell } from "@phosphor-icons/react";

function Home() {
	return (
		<>
			<header className="">
				<div className="">
					<h1 className="">Good morning, Terry</h1>
					<p className="">Welcome to Neobank</p>
				</div>
				<div className="">
					<Bell size={32} weight="light" />
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