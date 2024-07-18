import React from 'react';
function MaxLandingPage() {
return (
<div className="flex flex-col h-16">
<div className="relative flex-grow bg-gray-900">
<img
src="https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_

title_card.jpg"

alt="Max The One to Watch"
className="w-full h-full object-cover"
/>

<div className="absolute inset-0 flex flex-col items-center justify-
center text-white">

<h1 className="text-4xl font-bold mb-4">max</h1>
<h2 className="text-xl mb-4">THE ONE TO WATCH</h2>
<p className="mb-4">Stream all of HBO, plus hit series, movies,

reality, and more.</p>

<button className="px-6 py-2 bg-blue-600 rounded">SIGN UP

NOW</button>
</div>
</div>
<footer className="bg-gray-800 text-white py-4">
<div className="container mx-auto px-4 text-center">
<ul className="flex justify-center space-x-4 mb-4">
<li><a href="#" className="hover:underline">ABOUT</a></li>
<li><a href="#" className="hover:underline">GET HBO</a></li>
<li><a href="#" className="hover:underline">HELP</a></li>
<li><a href="#" className="hover:underline">SHOP</a></li>
<li><a href="#" className="hover:underline">CAREERS</a></li>
<li><a href="#" className="hover:underline">HBO INSPIRES</a></li>
<li><a href="#" className="hover:underline">HOW TO WATCH

MAX</a></li>
</ul>
<p className="text-sm">&copy; 2024 Home Box Office, Inc. All Rights

Reserved.</p>

<p className="text-xs">This website may contain mature content.</p>
</div>
</footer>
</div>
);
}