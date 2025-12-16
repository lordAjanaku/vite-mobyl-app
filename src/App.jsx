import { useState } from 'react'
import Navigation from "./Navigation.jsx"
import Home from "./Home.jsx"

function App() {
	return (
		<div className="bg-slate-100 px-6 py-10">
			<Home />
			<Navigation />
		</div>
	)
}

export default App;