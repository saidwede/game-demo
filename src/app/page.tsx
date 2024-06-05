import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black relative text-[#ff003c]">
      <img alt="decorative" className="bottom-10 w-[calc(100vw-200px)] absolute left-1/2 -translate-x-1/2" src="/Decoratives/Vector_hor_down.svg" />
      <img alt="decorative" className="top-20 w-[calc(100vw-200px)] absolute left-1/2 -translate-x-1/2" src="/Decoratives/Vector_hor_up.svg" />
      <img alt="decorative" className="h-[calc(100vh-20px)] top-1/2 -translate-y-1/2 absolute left-5" src="/Decoratives/Vector_ver_left.svg" />
      <img alt="decorative" className="h-[calc(100vh-20px)] top-1/2 -translate-y-1/2 absolute right-5" src="/Decoratives/Vector_ver_right.svg" />
      <img className="absolute top-5 left-[100px] h-[60px]" src="/logos/autom_red_logo.svg" alt="" />

      <div className="absolute right-[120px] top-8">
        <div className="text-red-700 text-right">
          <span>10</span> <span>/</span> <span>10</span> <span>PTX</span>
        </div>
        <div className="h-[10px] relative w-[300px] border border-b-4 border-red-700 border-b-red-500">
          <div className="h-full w-[120px] absolute top-0 left-0 z-10 bg-red-700"></div>
        </div>
      </div>
      <div className="absolute top-[100px] h-[calc(100vh-200px)] left-1/2 -translate-x-1/2 w-[calc(100vw-200px)]">
        <div className="text-center text-3xl pt-8 pb-12">Niveau 01</div>
        
        <h2 className="text-2xl">Quelle est la réponse à la question numéro 01?</h2>
        <div className="grid gap-2 pt-10">
          <label className="cursor-pointer flex items-center gap-3">
            <input type="radio" className=" appearance-none rounded-full h-8 w-8 border-2 bg-[#ff003c] bg-opacity-20 border-[#ff003c] relative checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 after:content-[''] after:inline-block checked:after:h-5 checked:after:w-5 checked:after:bg-[#ff003c] checked:after:rounded-full" name="res"/>
            <span>Choix 01</span>
          </label>
          <label className="cursor-pointer flex items-center gap-3">
            <input type="radio" className=" appearance-none rounded-full h-8 w-8 border-2 bg-[#ff003c] bg-opacity-20 border-[#ff003c] relative checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 after:content-[''] after:inline-block checked:after:h-5 checked:after:w-5 checked:after:bg-[#ff003c] checked:after:rounded-full" name="res"/>
            <span>Choix 02</span>
          </label>
          <label className="cursor-pointer flex items-center gap-3">
            <input type="radio" className=" appearance-none rounded-full h-8 w-8 border-2 bg-[#ff003c] bg-opacity-20 border-[#ff003c] relative checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 after:content-[''] after:inline-block checked:after:h-5 checked:after:w-5 checked:after:bg-[#ff003c] checked:after:rounded-full" name="res"/>
            <span>Choix 03</span>
          </label>
          <label className="cursor-pointer flex items-center gap-3">
            <input type="radio" className=" appearance-none rounded-full h-8 w-8 border-2 bg-[#ff003c] bg-opacity-20 border-[#ff003c] relative checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 after:content-[''] after:inline-block checked:after:h-5 checked:after:w-5 checked:after:bg-[#ff003c] checked:after:rounded-full" name="res"/>
            <span>Choix 04</span>
          </label>
        </div>
        <div className="pt-5">
          <input className="pl-4 text-sm border-[2px] border-[#ff003c] h-14 bg-[#ff003c] bg-opacity-20" placeholder="Entrez une autre réponse" type="text" />
        </div>
        <div className="relative inline-block pt-8">
          <img className="w-40" src="/buttons/red-button.svg" alt="" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2  text-white">Verifier</span>
        </div>
        
        

        <div className="absolute bottom-0 right-0 inline-block">
          <img className="w-40" src="/buttons/red-button.svg" alt="" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">Suivant</span>
        </div>
      </div>
    </div>
  );
}
