import f1 from './components/f1.json'
import f2 from './components/f2.json'
import FoodCard1 from "./components/FoodCard1";
import FoodCard2 from "./components/FoodCard2";

export default function Home() {
  return (
    <>
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      {/* header */}
      <header className="w-full flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-10 border-b border-black">
        <div>
          <img src="/Foodieland..png" className="h-[24px]" alt="Foodieland Logo" />
        </div>
        {/* Navigation  */}
        <div className="hidden md:flex justify-center items-center text-xl font-light gap-x-8 lg:gap-x-10">
          <p>Home</p>
          <p>Recipes</p>
          <p>Blog</p>
          <p>Contact</p>
          <p>About Us</p>
        </div>
        {/* Social Icons*/}
        <div className="flex justify-center items-center gap-x-6 sm:gap-x-8">
          <img src="/facebook.png" alt="Facebook" />
          <img src="/twitter.png" alt="Twitter" />
          <img src="/instagram.png" alt="Instagram" />
        </div>
        <div className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </div>
      </header>

      {/* img section  */}
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
        <img src="/Badge.png" className="absolute md:left-1/2 left-12 md:top-4 top-1 -translate-x-1/2 -rotate-10 z-10 w-20 h-20 sm:w-24 sm:h-24" alt="Badge" />
      </div>

      {/* Categories section */}
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 my-10 space-y-8 sm:space-y-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="font-semibold text-3xl sm:text-4xl md:text-5xl text-black">Categories</p>
          <button className="text-black font-semibold rounded-xl px-6 py-3 sm:px-8 sm:py-4 bg-[#E7FAFE]">View All Category</button>
        </div>
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
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-gray-700/60 to-white/60 z-0"/> 
            <img src="/sandwich.png" alt="Sandwich" className="z-10 w-16 h-16 sm:w-20 sm:h-20"/>
            <p className="text-black font-semibold text-base sm:text-lg z-10">Lunch</p>
          </div>
          <div className="relative overflow-hidden p-4 sm:p-6 rounded-3xl space-y-2 sm:space-y-4 flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-gray-700/60 to-white/60 z-0"/> 
            <img src="/choclate.png" alt="Chocolate" className="z-10 w-16 h-16 sm:w-20 sm:h-20"/>
            <p className="text-black font-semibold text-base sm:text-lg z-10">Snack</p>
          </div>
        </div>
      </div>

      {/* text section  */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-10 flex flex-col justify-center items-center text-center gap-4">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black">Simple and tasty recipes</p>
        <p className="text-base sm:text-lg text-center max-w-xl md:max-w-2xl lg:max-w-4xl w-full">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
      </div>

      {/* card grid */}
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* card */}
        {
          f1.map((i,index)=>(
            <FoodCard1 key={index} img={i.img} text={i.name}/>
          ))
        }
      </div>

      {/* Everyone can be a chef section  */}
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

      {/* text section */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-10 flex flex-col justify-center items-center text-center gap-4">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black">Check out @foodieland on Instagram</p>
        <p className="text-base sm:text-lg text-center max-w-xl md:max-w-2xl lg:max-w-4xl w-full">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
      </div>

      {/* Insta Post */}
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

      {/* Down food  */}
      <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-20 my-10'>
        <div className='flex flex-col lg:flex-row justify-between items-center py-6 sm:py-10 gap-4 lg:gap-0'>
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black max-w-md lg:max-w-[520px] w-full text-center lg:text-left">Try this delicious recipe to make your day</p>
            <p className="text-base sm:text-lg opacity-60 max-w-sm md:max-w-md lg:max-w-[32rem] w-full text-center lg:text-left">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
        </div>
        {/* grid*/}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
          {
            f2.map((i,index)=>(
              <FoodCard2 key={index} img={i.img} text={i.name}/>
            ))
          }
        </div>
      </div>

      {/* last div */}
      <div className='px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16'>
        <div className='w-full rounded-3xl bg-[#E7F9FD] flex flex-col justify-center items-center relative overflow-hidden text-center gap-6 sm:gap-8 py-10 sm:py-16'>
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black max-w-xl w-full">Deliciousness to your inbox</p>
          <p className="text-base sm:text-lg text-center max-w-md w-full">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
          <div className='p-2 rounded-3xl bg-white flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 w-full max-w-lg mx-auto'>
            <input type="text" name="" placeholder='Your email Address..' id="" className='px-4 py-3 sm:px-10 w-full sm:flex-1 rounded-md' />
            <button className="rounded-2xl bg-black w-full sm:w-fit flex justify-center items-center gap-2 text-white px-6 py-3 sm:px-9 sm:py-5">Subscribe</button>
          </div>
          <img src="lf1.png" className='absolute -left-10 -bottom-10 rotate-45 object-contain w-32 h-32 sm:w-40 sm:h-40 hidden sm:block' alt="Decorative element" />
          <img src="lf2.png" className='absolute -right-10 -bottom-10 object-contain w-32 h-32 sm:w-40 sm:h-40 hidden sm:block' alt="Decorative element" />
        </div>
      </div>

      {/* footer */}
      <div className='px-4 sm:px-8 md:px-12 lg:px-20 py-10'>
        <div className='border-b border-black flex flex-col md:flex-row justify-between items-center py-8 gap-8 md:gap-0'>
          <div className='flex flex-col justify-center items-center text-center md:items-start md:text-left gap-4'>
            <img src="/Foodieland..png" className='h-8' alt="Foodieland Logo" />
            <p className='opacity-60 max-w-xs'>Lorem ipsum dolor sit amet, consectetuipisicing elit</p>
          </div>
          <div className='flex flex-col sm:flex-row justify-center items-center text-xl font-light gap-4 sm:gap-x-8 lg:gap-x-10'>
            <p>Blog</p>
            <p>About Us</p>
            <p>Contact us</p>
          </div>
        </div>
      </div>
      <p className='text-black font-bold text-base sm:text-xl text-center py-4'>By Aryan Bola</p>
    </div>
    </>
  );
}
