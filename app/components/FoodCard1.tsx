interface foodCard {
  img:string,
  text:string
}

export default function FoodCard1({img,text}:foodCard){
  return (
    <>
    <div className="rounded-4xl p-4 bg-[#E7FAFE] flex flex-col justify-between items-center gap-6 relative">
          <img src="/Heart.png" alt="" className="absolute right-4 top-4 w-12 object-contain rounded-full flex justify-center items-center"/>
          <img src={`/${img}.png`} className="rounded-2xl w-full object-contain" alt="" />
          <div className="flex flex-col justify-between items-center gap-6">
            <p className="text-black font-semibold text-2xl w-[22rem]">{text}</p>
            <div className="flex justify-between items-center w-full">
              <button className="rounded-4xl px-4 py-2 bg-[#dcedf2] flex justify-center items-center"><img className="" src="/Timer.png" alt="" /><p className="text-black opacity-60">30 Minutes</p></button>
              <button className="rounded-4xl px-4 py-2 bg-[#dcedf2] flex justify-center items-center"><img src="/ForkKnife.png" alt="" /><p className="text-black opacity-60">Chicken</p></button>
            </div>
          </div>
        </div>
    </>
  )
}