import React, { useState } from 'react';
const Dropdown = () => {
const [isOpen, setIsOpen] = useState(false);
const toggleDropdown = () => {
setIsOpen(!isOpen);
};
const seasons = [
"SEASON 1",
"SEASON 2",
"SEASON 3",
"SEASON 4",
"SEASON 5",
"SEASON 6",
"SEASON 7",
"SEASON 8",
];
return (

<div className="relative inline-block text-left">
<div>
<button
type="button"
className="inline-flex justify-center w-full rounded-md shadow-sm

focus:outline-none "
id="menu-button"
aria-expanded="true"
aria-haspopup="true"
onClick={toggleDropdown}
>
SEASON
</button>
</div>
{isOpen && (
<div
className="origin-top-right absolute right-0 mt-2 w-56 rounded-md
shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"

role="menu"
aria-orientation="vertical"
aria-labelledby="menu-button"
>
<div className="py-1" role="none">
{seasons.map((season, index) => (
<a
key={index}
href="#"

className="text-gray-700 block px-4 py-2 text-sm hover:bg-
gray-100"

role="menuitem"
>
{season}
</a>
))}
</div>
</div>
)}
</div>
);
};
export default Dropdown;