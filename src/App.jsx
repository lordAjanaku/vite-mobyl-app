import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HorseIcon, HeartIcon, CubeIcon, RocketIcon, StarIcon, LightningIcon } from "@phosphor-icons/react";

const App = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-4">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-5xl font-bold text-white mb-2">Welcome to My App</h1>
        <p className="text-white/80 text-lg">Built with React + Vite + Tailwind</p>
      </header>

      {/* Icon Card */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 flex gap-6 items-center justify-center">
          <HorseIcon className="text-blue-600 hover:scale-110 transition-transform" size={48} />
          <HeartIcon 
            color="#AE2983" 
            weight="fill" 
            size={32} 
            className="animate-pulse hover:scale-125 transition-transform cursor-pointer" 
          />
          <CubeIcon 
            color="teal" 
            weight="duotone" 
            size={40}
            className="hover:rotate-45 transition-all duration-300" 
          />
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard 
          icon={<RocketIcon size={40} weight="duotone" />}
          title="Fast Performance"
          description="Lightning fast development with Vite's hot module replacement"
          color="bg-blue-500"
        />
        <FeatureCard 
          icon={<StarIcon size={40} weight="fill" />}
          title="Modern UI"
          description="Beautiful designs powered by Tailwind CSS utilities"
          color="bg-yellow-500"
        />
        <FeatureCard 
          icon={<LightningIcon size={40} weight="fill" />}
          title="Easy Deploy"
          description="Seamlessly deployed to GitHub Pages with Actions"
          color="bg-purple-500"
        />
      </div>

      {/* Button Section */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
          Get Started
        </button>
      </div>
    </main>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className={`${color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default App;