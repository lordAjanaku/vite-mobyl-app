import { useState } from 'react'
import Navigation from "./Navigation.jsx"
import Home from "./Home.jsx"

function App() {
	return (
		<div className="bg-slate-100">
			<Home />
			<Navigation />
		</div>
	)
}

export default App;