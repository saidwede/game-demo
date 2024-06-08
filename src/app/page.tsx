import Image from "next/image";
import { TbInfoSmall } from "react-icons/tb";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[#222325] relative text-[#4ED0D6]">
      <div className="w-[300px] fixed top-0 left-[100px] blur-[200px] h-[100px] bg-[#BF3A35] rounded-[100%]"></div>
      <div className="w-[300px] fixed bottom-0 right-[100px] blur-[200px] h-[100px] bg-[#5FF7FC] rounded-[100%]"></div>
      <img alt="decorative" className="bottom-10 w-[calc(100vw-200px)] absolute left-1/2 -translate-x-1/2" src="/Decoratives/Vector_hor_down.svg" />
      <img alt="decorative" className="top-20 w-[calc(100vw-200px)] absolute left-1/2 -translate-x-1/2" src="/Decoratives/Vector_hor_up.svg" />
      <img alt="decorative" className="h-[calc(100vh-20px)] top-1/2 -translate-y-1/2 absolute left-5" src="/Decoratives/Vector_ver_left.svg" />
      <img alt="decorative" className="h-[calc(100vh-20px)] top-1/2 -translate-y-1/2 absolute right-5" src="/Decoratives/Vector_ver_right.svg" />
      <img className="absolute top-5 left-1/2 -translate-x-1/2 h-[75px]" src="/logos/autom_cyan_logo.svg" alt="" />
      <img className="absolute top-[25px] left-[100px] w-[45px]" src="/top-left-element/logos/logo-red.svg"></img>
      <div className="absolute top-[46px] -translate-y-1/2 left-[160px]">
        <div className="text-xs text-red-500">Bienvenue</div>
        <img className="" src="/top-left-element/rectangles/rectangle-red.svg"></img>
      </div>
      <div className="absolute right-[120px] top-8">
        <div className="text-[#4ED0D6] text-xs mb-2 text-right">
          <span>Question 3/10</span>
        </div>
        <div className="h-[10px] relative w-[300px] border border-b-4 border-[#4ED0D6] border-[34ED0D6]">
          <div className="h-full w-[120px] absolute top-0 left-0 z-10 bg-[#4ED0D6]"></div>
        </div>
      </div>
      <div className="absolute top-[100px] h-[calc(100vh-200px)] left-1/2 -translate-x-1/2 w-[calc(100vw-200px)]">
        {/* <div className="text-center text-3xl pt-8 pb-12">Niveau 01</div> */}
        <div className="absolute text-3xl left-2 top-0 h-8 w-8 border-[2px] border-[#4ED0D6] rounded-full flex justify-center items-center">
          <TbInfoSmall className="text-[40px] text-[#4ED0D6]" />
        </div>
        <div className="absolute text-3xl right-2 top-0">09:00</div>
        {/* <div className="absolute p-[2px] text-xl right-3 top-0 h-8 w-14 border border-[#4ED0D6] rounded-md">
          <div className="grid h-full w-full gap-[1px] grid-cols-10 rounded-sm overflow-hidden">
            <div className="bg-[#4ED0D6] w-full h-full"></div>
            <div className="bg-[#4ED0D6] w-full h-full"></div>
            <div className="bg-[#4ED0D6] w-full h-full"></div>
            <div className="bg-[#4ED0D6] w-full h-full"></div>
            <div className="bg-[#4ED0D6] w-full h-full"></div>
            <div className="bg-[#4ED0D6] w-full h-full"></div>
          </div>
          <div className="absolute top-1/2 -right-[6px] -translate-y-1/2 h-3 w-1 bg-[#4ED0D6]"></div>
        </div> */}
        <h2 className="text-2xl mt-24">Quelle est la réponse à la question numéro 01?</h2>
        <div className="grid gap-2 pt-10">
          <label className="cursor-pointer flex items-center gap-3">
            <input type="radio" className=" appearance-none rounded-full h-8 w-8 border-2 bg-[#4ED0D6] bg-opacity-20 border-[#4ED0D6] relative checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 after:content-[''] after:inline-block checked:after:h-5 checked:after:w-5 checked:after:bg-[#4ED0D6] checked:after:rounded-full" name="res"/>
            <span>Choix 01</span>
          </label>
          <label className="cursor-pointer flex items-center gap-3">
            <input type="radio" className=" appearance-none rounded-full h-8 w-8 border-2 bg-[#4ED0D6] bg-opacity-20 border-[#4ED0D6] relative checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 after:content-[''] after:inline-block checked:after:h-5 checked:after:w-5 checked:after:bg-[#4ED0D6] checked:after:rounded-full" name="res"/>
            <span>Choix 02</span>
          </label>
          <label className="cursor-pointer flex items-center gap-3">
            <input type="radio" className=" appearance-none rounded-full h-8 w-8 border-2 bg-[#4ED0D6] bg-opacity-20 border-[#4ED0D6] relative checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 after:content-[''] after:inline-block checked:after:h-5 checked:after:w-5 checked:after:bg-[#4ED0D6] checked:after:rounded-full" name="res"/>
            <span>Choix 03</span>
          </label>
          <label className="cursor-pointer flex items-center gap-3">
            <input type="radio" className=" appearance-none rounded-full h-8 w-8 border-2 bg-[#4ED0D6] bg-opacity-20 border-[#4ED0D6] relative checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 after:content-[''] after:inline-block checked:after:h-5 checked:after:w-5 checked:after:bg-[#4ED0D6] checked:after:rounded-full" name="res"/>
            <span>Choix 04</span>
          </label>
        </div>
        <div className="pt-5">
          <input className="pl-4 text-sm border-[2px] border-[#4ED0D6] h-14 bg-[#4ED0D6] bg-opacity-20" placeholder="Entrez une autre réponse" type="text" />
        </div>
        <div className="relative inline-block mt-8">
          <img className="w-40" src="/buttons/blue-button.svg" alt="" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black">Verifier</span>
        </div>
        
        

        <div className="absolute bottom-0 right-0 inline-block">
          <img className="w-40" src="/buttons/blue-button.svg" alt="" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black">Suivant</span>
        </div>
      </div>
    </div>
  );
}
