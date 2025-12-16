import { useState } from 'react'
import Navigation from "./Navigation.jsx"
import Home from "./Home.jsx"

function App() {
	return (
		<div className="bg-slate-200 px-6 py-10 min-h-screen">
			<Home />
			<Navigation />
		</div>
	)
}

export default App;