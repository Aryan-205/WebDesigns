// import f1 from './components/f1.json'
// import f2 from './components/f2.json'
// import FoodCard1 from "./components/FoodCard1";
// import FoodCard2 from "./components/FoodCard2";

// export default function Home() {
//   return (
//     <>
//     <div className="h-screen w-full bg-white">
//       {/* header */}
//       <header className="w-full flex justify-between items-center px-16 py-10 border-b border-black ">
//         <div>
//           <img src="/Foodieland..png" className="h-[24px]" alt="" />
//         </div>
//         <div className="flex justify-center items-center text-xl font-light gap-15">
//           <p>Home</p>
//           <p>Recipes</p>
//           <p>Blog</p>
//           <p>Contact</p>
//           <p>About Us</p>
//         </div>
//         <div className="flex justify-center items-center gap-10">
//           <img src="/facebook.png" alt="" />
//           <img src="/twitter.png" alt="" />
//           <img src="/instagram.png" alt="" />
//         </div>
//       </header>
//       {/* img section */}
//       <div className="flex justify-center mx-20 my-10 rounded-4xl overflow-hidden relative">
//         <div className="bg-[#E7FAFE] flex-1 px-12 py-9 flex flex-col justify-between items-center">
//           <div className="flex flex-col gap-6">
//             <button className="flex items-center gap-2 rounded-4xl bg-white text-black px-5 py-3 w-fit"><img src="/paperEmoji.png" className="w-4" alt="" />Hot Recipe</button>
//             <p className="text-7xl font-semibold text-black">Spicy delicious chicken wings</p>
//             <p className="text-xl opacity-60 w-[32rem]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
//             <div className="flex justify-start items-center gap-10">
//               <button className="rounded-4xl px-4 py-2 bg-[#dcedf2] flex justify-center items-center"><img className="" src="/Timer.png" alt="" /><p className="text-black opacity-60">30 Minutes</p></button>
//               <button className="rounded-4xl px-4 py-2 bg-[#dcedf2] flex justify-center items-center"><img src="/ForkKnife.png" alt="" /><p className="text-black opacity-60">Chicken</p></button>
//             </div>
//           </div>
//           <div className="w-full">
//             <div className="flex justify-between">
//               <div className="flex-center">
//                 <img src="/John.png" className="rounded-full" alt="" />
//                 <div>
//                   <p className="text-black font-bold">John Smith</p>
//                   <p className="opacity-60">15 March 2025</p>
//                 </div>
//               </div>
//               <button className="rounded-2xl bg-black flex justify-center items-center gap-2 text-white px-9 py-5">View Recipe<img src="/PlayCircle.png" alt="" /></button>
//             </div>
//           </div>
//         </div>
//         <div className="flex-1">
//           <img src="/bakedChicken.png" alt="" />
//         </div>
//         <img src="/Badge.png" className="absolute left-1/2 top-4 -rotate-10 z-10" alt="" />
//       </div>
//       {/* catefory section */}
//       <div className="mx-20 my-10 space-y-10">
//         <div className="flex-between">
//           <p className="font-semibold text-5xl text-black">Categories</p>
//           <button className="text-black font-semibold rounded-xl px-8 py-4 bg-[#E7FAFE]">View All Category</button>
//         </div>
//         <div className="flex-between ">
//           <div className="relative overflow-hidden w-fit h-fit p-8 rounded-4xl space-y-4 ">
//             <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#708246]/60 to-white/60 z-0"/>
//             <img src="/riceBall.png" alt="" className="z-10"/>
//             <p className="text-black font-semibold text-center z-10">Breakfast</p>
//           </div>
//           <div className="bg-gradient-to-t from-[#6CC63F] to-white opacity-60 w-fit h-fit p-8 rounded-4xl space-y-4 ">
//             <img src="/plant.png" alt="" />
//             <p className="text-black font-semibold text-center">Breakfast</p>
//           </div>
//           <div className="bg-gradient-to-t from-[#CC261B] to-white opacity-60 w-fit h-fit p-8 rounded-4xl space-y-4 ">
//             <img src="/meat.png" alt="" />
//             <p className="text-black font-semibold text-center">Breakfast</p>
//           </div>
//           <div className="bg-gradient-to-t from-[#F09E00] to-white opacity-60 w-fit h-fit p-8 rounded-4xl space-y-4 ">
//             <img src="/pastry.png" alt="" />
//             <p className="text-black font-semibold text-center">Breakfast</p>
//           </div>
//           <div className="bg-gradient-to-t from-[#000000] to-white opacity-60 w-fit h-fit p-8 rounded-4xl space-y-4 ">
//             <img src="/sandwich.png" alt="" />
//             <p className="text-black font-semibold text-center">Breakfast</p>
//           </div>
//           <div className="bg-gradient-to-t from-[#000000] to-white opacity-60 w-fit h-fit p-8 rounded-4xl space-y-4 ">
//             <img src="/choclate.png" alt="" />
//             <p className="text-black font-semibold text-center">Breakfast</p>
//           </div>
//         </div>
//       </div>
//       {/* text */}
//       <div className="w-full px-20 py-10 flex flex-col justify-center items-center gap-4">
//         <p className="text-black text-5xl font-semibold">Simple and tasty recipes</p>
//         <p className="text-black text-xl text-center w-[60rem]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
//       </div>
//       {/* card grid */}
//       <div className="mx-20 my-10 grid grid-cols-3 gap-8">
//         {/* card */}
//         {
//           f1.map((i,index)=>(
//             <FoodCard1 key={index} img={i.img} text={i.name}/>
//           ))
//         }
//       </div>
//       <div className="mx-20 my-10 rounded-4xl overflow-hidden flex py-8">
//         <div className="flex-1 flex justify-center flex-col gap-8">
//           <p className="text-5xl font-semibold text-black">Everyone can be a
// chef in their own kitchen</p>
//             <p className="text-lg opacity-60 w-[32rem]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
//           <button className="rounded-2xl bg-black w-fit flex justify-center items-center gap-2 text-white px-9 py-5">Learn more</button>
//         </div>
//         <div className="flex-1">
//           <img src="/chefPortrait.png" alt="" className='bg-gradient-to-t from-[#E7FAFE] to-white pr-2 pl-2 pt-2 rounded-4xl' />
//         </div>
//       </div>
//       {/* text */}
//       <div className="w-full px-20 py-10 flex flex-col justify-center items-center gap-4">
//         <p className="text-black text-5xl font-semibold">Check out @foodieland on Instagram</p>
//         <p className="text-black text-xl text-center w-[60rem]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
//       </div>
//       {/* insta Post */}
//       <div className='my-10 bg-gradient-to-t from-[#E7FAFE] to-white rounded-4xl'>
//         <div className='flex grid-cols-4 justify-around items-center'>
//           <img src="/p1.png" alt="" />
//           <img src="/p2.png" alt="" />
//           <img src="/p3.png" alt="" />
//           <img src="/p4.png" alt="" />
//         </div>
//         <div className='flex justify-center items-center py-16'>
//           <button className="rounded-2xl bg-black w-fit flex justify-center items-center gap-2 text-white px-9 py-5">Visit our Instagram<img src="/instagramWhite.png" alt="" /></button>
//         </div>
//       </div>
//       {/* Down food */}
//       <div className='mx-20 my-10'>
//         <div className='flex justify-between items-center py-10'>
//           <p className="text-5xl font-semibold text-black w-[520px]">Try this delicious recipe
// to make your day</p>
//             <p className="text-lg opacity-60 w-[32rem]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
//         </div>
//         {/* grid */}
//         <div className='grid grid-cols-4 gap-8'>
//           {
//             f2.map((i,index)=>(
//               <FoodCard2 key={index} img={i.img} text={i.name}/>
//             ))
//           }
//         </div>
//       </div>
//       {/* last div */}
//       <div className='mx-20 py-10 w-full rounded-4xl bg-[#E7F9FD] flex flex-col justify-center items-center relative overflow-hidden'>
//         <p className="text-black text-5xl font-semibold">Check out @foodieland on Instagram</p>
//         <p className="text-black text-xl text-center w-[60rem]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
//       </div>
//     </div>
//     </>
//   );
// }

import f1 from './components/f1.json'
import f2 from './components/f2.json'
import FoodCard1 from "./components/FoodCard1";
import FoodCard2 from "./components/FoodCard2";

export default function Home() {
  return (
    <>
    {/* Added min-h-screen and overflow-x-hidden to the main container for better responsiveness */}
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      {/* header - Adjusted padding and gap for responsiveness */}
      <header className="w-full flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-10 border-b border-black">
        <div>
          <img src="/Foodieland..png" className="h-6" alt="Foodieland Logo" />
        </div>
        {/* Navigation - Adjusted gap for responsiveness and hid for small screens */}
        <div className="hidden md:flex justify-center items-center text-xl font-light gap-x-8 lg:gap-x-10">
          <p>Home</p>
          <p>Recipes</p>
          <p>Blog</p>
          <p>Contact</p>
          <p>About Us</p>
        </div>
        {/* Social Icons - Adjusted gap */}
        <div className="flex justify-center items-center gap-x-6 sm:gap-x-8">
          <img src="/facebook.png" alt="Facebook" />
          <img src="/twitter.png" alt="Twitter" />
          <img src="/instagram.png" alt="Instagram" />
        </div>
        {/* Mobile menu icon (optional, would need implementation) */}
        <div className="md:hidden">
            {/* Add a hamburger icon or similar for mobile navigation */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </div>
      </header>

      {/* img section - Adjusted margins, padding, and text widths for responsiveness */}
      <div className="flex flex-col lg:flex-row justify-center mx-4 sm:mx-8 md:mx-12 lg:mx-20 my-10 rounded-3xl overflow-hidden relative">
        <div className="bg-[#E7FAFE] flex-1 px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-12 lg:py-9 flex flex-col justify-between items-center text-center lg:text-left">
          <div className="flex flex-col gap-4 sm:gap-6 items-center lg:items-start">
            <button className="flex items-center gap-2 rounded-3xl bg-white text-black px-5 py-3 w-fit"><img src="/paperEmoji.png" className="w-4" alt="Paper Emoji" />Hot Recipe</button>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black">Spicy delicious chicken wings</p>
            <p className="text-base sm:text-lg opacity-60 max-w-sm md:max-w-md lg:max-w-[32rem] w-full">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <div className="flex justify-center lg:justify-start items-center gap-6 sm:gap-10 mt-4">
              <button className="rounded-3xl px-4 py-2 bg-[#dcedf2] flex justify-center items-center"><img className="w-5 h-5" src="/Timer.png" alt="Timer" /><p className="text-black opacity-60">30 Minutes</p></button>
              <button className="rounded-3xl px-4 py-2 bg-[#dcedf2] flex justify-center items-center"><img className="w-5 h-5" src="/ForkKnife.png" alt="Fork and Knife" /><p className="text-black opacity-60">Chicken</p></button>
            </div>
          </div>
          <div className="w-full mt-8 lg:mt-0">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <img src="/John.png" className="rounded-full w-12 h-12" alt="John Smith" />
                <div>
                  <p className="text-black font-bold">John Smith</p>
                  <p className="opacity-60">15 March 2025</p>
                </div>
              </div>
              <button className="rounded-2xl bg-black flex justify-center items-center gap-2 text-white px-6 py-3 sm:px-9 sm:py-5 w-full sm:w-auto">View Recipe<img src="/PlayCircle.png" alt="Play Circle" /></button>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full lg:w-auto">
          <img src="/bakedChicken.png" alt="Baked Chicken" className="w-full h-auto object-cover" />
        </div>
        {/* Adjusted badge position and size for responsiveness */}
        <img src="/Badge.png" className="absolute left-1/2 top-4 -translate-x-1/2 -rotate-10 z-10 w-20 h-20 sm:w-24 sm:h-24" alt="Badge" />
      </div>

      {/* Categories section - Adjusted margins and grid for responsiveness */}
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 my-10 space-y-8 sm:space-y-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="font-semibold text-3xl sm:text-4xl md:text-5xl text-black">Categories</p>
          <button className="text-black font-semibold rounded-xl px-6 py-3 sm:px-8 sm:py-4 bg-[#E7FAFE]">View All Category</button>
        </div>
        {/* Changed to responsive grid for categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="relative overflow-hidden p-4 sm:p-6 rounded-3xl space-y-2 sm:space-y-4 flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#708246]/60 to-white/60 z-0"/>
            <img src="/riceBall.png" alt="Rice Ball" className="z-10 w-16 h-16 sm:w-20 sm:h-20"/>
            <p className="text-black font-semibold text-base sm:text-lg z-10">Breakfast</p>
          </div>
          <div className="relative overflow-hidden p-4 sm:p-6 rounded-3xl space-y-2 sm:space-y-4 flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#6CC63F]/60 to-white/60 z-0"/>
            <img src="/plant.png" alt="Plant" className="z-10 w-16 h-16 sm:w-20 sm:h-20"/>
            <p className="text-black font-semibold text-base sm:text-lg z-10">Vegan</p>
          </div>
          <div className="relative overflow-hidden p-4 sm:p-6 rounded-3xl space-y-2 sm:space-y-4 flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#CC261B]/60 to-white/60 z-0"/>
            <img src="/meat.png" alt="Meat" className="z-10 w-16 h-16 sm:w-20 sm:h-20"/>
            <p className="text-black font-semibold text-base sm:text-lg z-10">Meat</p>
          </div>
          <div className="relative overflow-hidden p-4 sm:p-6 rounded-3xl space-y-2 sm:space-y-4 flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#F09E00]/60 to-white/60 z-0"/>
            <img src="/pastry.png" alt="Pastry" className="z-10 w-16 h-16 sm:w-20 sm:h-20"/>
            <p className="text-black font-semibold text-base sm:text-lg z-10">Dessert</p>
          </div>
          <div className="relative overflow-hidden p-4 sm:p-6 rounded-3xl space-y-2 sm:space-y-4 flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-gray-700/60 to-white/60 z-0"/> {/* Adjusted color to a standard Tailwind gray */}
            <img src="/sandwich.png" alt="Sandwich" className="z-10 w-16 h-16 sm:w-20 sm:h-20"/>
            <p className="text-black font-semibold text-base sm:text-lg z-10">Lunch</p>
          </div>
          <div className="relative overflow-hidden p-4 sm:p-6 rounded-3xl space-y-2 sm:space-y-4 flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-gray-700/60 to-white/60 z-0"/> {/* Adjusted color to a standard Tailwind gray */}
            <img src="/choclate.png" alt="Chocolate" className="z-10 w-16 h-16 sm:w-20 sm:h-20"/>
            <p className="text-black font-semibold text-base sm:text-lg z-10">Snack</p>
          </div>
        </div>
      </div>

      {/* text section - Adjusted padding and width for responsiveness */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-10 flex flex-col justify-center items-center text-center gap-4">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black">Simple and tasty recipes</p>
        <p className="text-base sm:text-lg text-center max-w-xl md:max-w-2xl lg:max-w-4xl w-full">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
      </div>

      {/* card grid - Adjusted margins and grid for responsiveness */}
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* card */}
        {
          f1.map((i,index)=>(
            <FoodCard1 key={index} img={i.img} text={i.name}/>
          ))
        }
      </div>

      {/* Everyone can be a chef section - Adjusted margins and text widths */}
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 my-10 rounded-3xl overflow-hidden flex flex-col lg:flex-row py-8">
        <div className="flex-1 flex justify-center flex-col gap-6 sm:gap-8 text-center lg:text-left px-4 sm:px-0">
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black">Everyone can be a chef in their own kitchen</p>
            <p className="text-base sm:text-lg opacity-60 max-w-sm md:max-w-md lg:max-w-[32rem] w-full mx-auto lg:mx-0">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
          <button className="rounded-2xl bg-black w-fit flex justify-center items-center gap-2 text-white px-6 py-3 sm:px-9 sm:py-5 mx-auto lg:mx-0">Learn more</button>
        </div>
        <div className="flex-1 mt-8 lg:mt-0">
          <img src="/chefPortrait.png" alt="Chef Portrait" className='bg-gradient-to-t from-[#E7FAFE] to-white pr-2 pl-2 pt-2 rounded-3xl w-full h-auto' />
        </div>
      </div>

      {/* text section - Adjusted padding and width for responsiveness */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-10 flex flex-col justify-center items-center text-center gap-4">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black">Check out @foodieland on Instagram</p>
        <p className="text-base sm:text-lg text-center max-w-xl md:max-w-2xl lg:max-w-4xl w-full">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
      </div>

      {/* Insta Post - Adjusted margins and grid for responsiveness */}
      <div className='my-10 bg-gradient-to-t from-[#E7FAFE] to-white rounded-3xl mx-4 sm:mx-8 md:mx-12 lg:mx-20'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-4 p-4'>
          <img src="/p1.png" alt="Instagram Post 1" className="w-full h-auto object-cover rounded-md"/>
          <img src="/p2.png" alt="Instagram Post 2" className="w-full h-auto object-cover rounded-md"/>
          <img src="/p3.png" alt="Instagram Post 3" className="w-full h-auto object-cover rounded-md"/>
          <img src="/p4.png" alt="Instagram Post 4" className="w-full h-auto object-cover rounded-md"/>
        </div>
        <div className='flex justify-center items-center py-10 sm:py-16'>
          <button className="rounded-2xl bg-black w-fit flex justify-center items-center gap-2 text-white px-6 py-3 sm:px-9 sm:py-5">Visit our Instagram<img src="/instagramWhite.png" alt="Instagram Icon" /></button>
        </div>
      </div>

      {/* Down food - Adjusted margins and text widths */}
      <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-20 my-10'>
        <div className='flex flex-col lg:flex-row justify-between items-center py-6 sm:py-10 gap-4 lg:gap-0'>
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black max-w-md lg:max-w-[520px] w-full text-center lg:text-left">Try this delicious recipe to make your day</p>
            <p className="text-base sm:text-lg opacity-60 max-w-sm md:max-w-md lg:max-w-[32rem] w-full text-center lg:text-left">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
        </div>
        {/* grid - Adjusted grid for responsiveness */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
          {
            f2.map((i,index)=>(
              <FoodCard2 key={index} img={i.img} text={i.name}/>
            ))
          }
        </div>
      </div>

      {/* last div - Adjusted margins and width for responsiveness */}
      <div className='p-20 h-[32rem]'>
        <div className=' w-full rounded-4xl h-full bg-[#E7F9FD] flex flex-col justify-center items-center relative overflow-hidden text-center gap-8'>
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black">Deliciousness to your inbox</p>
          <p className="text-base sm:text-lg text-center w-[36rem]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
          <div className='p-2 rounded-4xl bg-white flex justify-between items-center gap-8'>
            <input type="text" name="" placeholder='Your email Address..' id="" className='px-10' />
            <button className="rounded-2xl bg-black w-fit flex justify-center items-center gap-2 text-white px-6 py-3 sm:px-9 sm:py-5">Subscribe</button>
          </div>
          <img src="lf1.png" className='absolute -left-10 -bottom-10 rotate-45 object-contain' alt="" />
          <img src="lf2.png" className='absolute -right-10 -bottom-10 object-contain' alt="" />
        </div>
      </div>
      {/* footer */}
      <div className='px-20 py-10'>
        <div className='border-b border-black flex-between py-8'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <img src="/Foodieland..png" className='h-8' alt="" />
            <p className='opacity-60'>Lorem ipsum dolor sit amet, consectetuipisicing elit</p>
          </div>
          <div className='flex justify-center items-center text-xl font-light gap-x-8 lg:gap-x-10'>
            <p>Reciet</p>
            <p>Blog</p>
            <p>About Us</p>
            <p>Contact us</p>
          </div>
        </div>
      </div>
      <p className='text-black text-bold text-xl text-center'>By Aryan Bola</p>
    </div>
    </>
  );
}
