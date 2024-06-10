"use client"
import Button from "./ui/Button";
import InputRadio from "./ui/InputRadio";
import InputText from "./ui/InputText";
import Image from "next/image";
import { FaInfo } from "react-icons/fa";
import { ImExit } from "react-icons/im";

export default function Home() {
  return (
    <>
      <div className="absolute right-[120px] top-8">
        <div className="text-[#4ED0D6] text-md mb-1 text-right">
          <span>Question 3/10</span>
        </div>
        <div className="h-[10px] relative w-[300px] border border-b-4 border-[#4ED0D6] border-[34ED0D6]">
          <div className="h-full w-[120px] absolute top-0 left-0 z-10 bg-[#4ED0D6]"></div>
        </div>
      </div>
      <div className="absolute top-[100px] h-[calc(100vh-200px)] left-1/2 -translate-x-1/2 w-[calc(100vw-200px)]">
        {/* <div className="text-center text-3xl pt-8 pb-12">Niveau 01</div> */}
        <div className="absolute cursor-pointer text-3xl left-2 top-0 h-9 w-9 border-[2px] border-[#4ED0D6] rounded-full flex justify-center items-center">
          <FaInfo className="text-[12px] text-[#4ED0D6]" />
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
        <h2 className="text-2xl mt-24">03: Quelle est la réponse à la question numéro 03?</h2>
        <div className="grid gap-2 pt-10">
          <label className="cursor-pointer flex items-center gap-3">
            <InputRadio name="res" onChange={() => {}}></InputRadio>
            <span>Choix 01</span>
          </label>
          <label className="cursor-pointer flex items-center gap-3">
            <InputRadio name="res" onChange={() => {}}></InputRadio>
            <span>Choix 02</span>
          </label>
          <label className="cursor-pointer flex items-center gap-3">
            <InputRadio name="res" onChange={() => {}}></InputRadio>
            <span>Choix 03</span>
          </label>
          <label className="cursor-pointer flex items-center gap-3">
            <InputRadio name="res" onChange={() => {}}></InputRadio>
            <span>Choix 04</span>
          </label>
        </div>
        <InputText
          className="w-[340px]"
          placeholder="Entrez une autre réponse" 
          onChange = {() => {}}
        ></InputText>
        <Button className="relative mt-8">Verifier</Button>
        
        <div className="absolute bottom-0 right-0 flex">
          <Button className="">
            <ImExit className="text-[20px] mr-1"/>
            <span>Quitter</span>
          </Button>
          <Button className="ml-8">Suivant</Button>
        </div>
        
      </div>
    </>
  );
}
