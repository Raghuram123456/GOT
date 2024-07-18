import React from 'react';
import Images from "../Images/Robert.webp";
import Header from './Header';
import Got from '../pages/Got';
import FeaturedCharacters from '../pages/FeaturedCharacters'
import Footer from './Footer'
const Home = () => {
return (
<div className='font-[Poppins]'>
<Header />
<div className='pl-[10%] pr-[10%] pt-28 bg-slate-30 min-h-
[calc(100vh)]'>
<div className="w-full h-100 relative">
<img src={Images} alt="Your Alt Text" className="w-full h-auto" />

{/* <div className="absolute top-1/4 left-1/2 transform -translate-
x-1/2 -translate-y-1/2 px-4 py-3 text-container text-center">

<p className='text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-
8xl text-white '>

<span className='mr-8'>Eddard</span>
<span className='mr-8'>Ned</span>
<span>Stark</span>
</p>
</div> */}
</div>
<div className='pt-[10%] justify-content'><Got/></div>
<div className='pt-[10%] justify-content'><FeaturedCharacters/></div>
</div>
{/* <Footer/> */}
</div>
);
}
export default Home;