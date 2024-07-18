import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
function Card() {
const reviewData = [

{ poster: 'https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/daenarys-1920.jpg?w=1200', cname: 'Daenerys Targaryen',oname: 'EMILIA CLARKE' },{ poster: 'https://static.hbo.com/game-of-thrones-1-1920x1080.jpg', cname:'Lord Stark', oname: 'SEAN BEAN' },
{ poster: 'https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/robert-stark-1920.jpg?w=1200', cname: 'Robb Stark',oname: 'RICHARD MADDEN' },{ poster:'https://upload.wikimedia.org/wikipedia/en/0/06/Robert_Baratheon_Profile_Mark_Addy.jpg', cname: 'Robert Baratheon', oname: 'MARK ADDY' },{ poster: 'https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/tyrion-lannister-1920.jpg?w=1200', cname: 'TyrionLannister', oname: 'PETER DINKLAGE' },{ poster: 'https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/cersei-lannister-1920.jpg?w=1200', cname: 'CerseiLannister', oname: 'LENA HEADEY' },
{ poster: 'https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/jamie-lannister-1920.jpg?w=1200', cname: 'JaimeLannister', oname: 'OLAJ COSTER-WALDAU' },{ poster: 'https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/john-snow-1920.jpg?w=1200', cname: 'Jon Snow', oname:'KIT HARINGTON' },{ poster: 'https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/arya-stark-1920.jpg?w=1200', cname: 'Arya Stark', oname:'MAISIE WILLIAMS' },{ poster: 'https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/sansa-stark-1920.jpg?w=1200', cname: 'Sansa Stark',oname: 'SOPHIE TURNER' },
];
const settings = {
infinite: true,
duration: 2000,
responsive: [
{ breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 }},
{ breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 }},
{ breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 }},
],
prevArrow: (
<div style={{ marginRight: '-25px', zIndex: '10' }}>

<svg fill="#000000" height="50px" width="50px" version="1.1"
id="Capa_1" viewBox="0 0 31.494 31.494" xmlSpace="preserve">

<g>
<g id="c99_arrow_back">
<path d="M10.273,15.763l7.463-7.464c0.586-0.585,0.586-1.535,0-

2.121c-0.586-0.586-1.535-0.586-2.121,0

l-8.888,8.888c-0.293,0.293-0.439,0.678-

0.439,1.06c0,0.384,0.146,0.768,0.439,1.06l8.888,8.888c0.586,0.586,1.535,0.586,
2.121,0

c0.586-0.586,0.586-1.535,0-2.121L10.273,15.763z"/>
</g>
</g>
</svg>
</div>
),
nextArrow: (
<div style={{ marginLeft: '-25px', zIndex: '10' }}>
<svg fill="#000000" height="50px" width="50px" version="1.1"
id="Capa_1" viewBox="0 0 31.494 31.494" xmlSpace="preserve">

<g>
<g id="c99_arrow_forward">
<path d="M21.222,15.735l-7.461,7.461c-0.586,0.586-

0.586,1.535,0,2.121s1.535,0.586,2.121,0l8.888-8.888

c0.293-0.293,0.439-0.678,0.439-1.06c0-0.384-0.146-0.768-0.439-

1.06l-8.888-8.888c-0.586-0.586-1.535-0.586-2.121,0
s-0.586,1.535,0,2.121L21.222,15.735z"/>
</g>
</g>
</svg>
</div>
),
};
return (
<div className="mx-auto max-w-6xl ">
<div className='text-center text-[35px] font-medium'>Featured
Character</div>
<div className='pt-[50px]'>
<Slide {...settings}>
{reviewData.map((review, index) => (

<div key={index} className="mb-4 mx-2 bg-white flex flex-col items-
center justify-between"> {/* Added mx-2 for horizontal margin */}

<img src={review.poster} className='w-48 h-60 object-cover' />

<h1 className='pt-3 text-[17px] font-medium text-
black'>{review.cname}</h1>

<h1 className='text-[14px] font-medium text-gray-
500'>{review.oname}</h1>

</div>
))}
</Slide>
</div>
</div>
);
}
export default Card;