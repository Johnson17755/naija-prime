// src/components/_component/Cards.tsx
import React from "react";
import Image from "next/image";
import { IoIosPlay } from "react-icons/io";
import banner from "../../../../../public/Banner-image.svg";
import Link from "next/link";
import { CardData } from "@/types"; 
import styles from "./Cards.module.css"

interface CardsProps {
  cardsData: CardData[];
}

interface CardzProp{
bannerUrl: string;
seriesGenre:string;
title: string;
proudcer: string;
}

interface StringCards{
  cardsData: CardsProps[]
}

const Cards: React.FC<StringCards> = ({ cardsData }) => {
  return (
    <div>
      <div className={styles.container}>
      {cardsData.map((card:any) => (
        <div key={card.id} className={styles.box}>
          <div >
            <div>
              <h6 className="font-bold text-[10px]">Banner</h6>
              <Image
                src={card?.bannerUrl || banner}
                alt="Banner"
                className="h-7"
                width={100}
                height={28}
              />
            </div>
            <div>
              <h6 className="font-bold text-[10px]">Trailer</h6>
              <div className="h-7 border border-dashed border-black flex items-center justify-center">
                <IoIosPlay />
              </div>
            </div>
            <div>
              <h6 className="font-bold text-[10px]">Movie</h6>
              <div className="h-7 border border-dashed border-black bg-[#737373] flex items-center justify-center">
                <IoIosPlay style={{ color: "white" }} />
              </div>
            </div>
          </div>

{/* secondpart */}
          <div className="w-[50%]">
            <div className="font-bold text-[10px] flex flex-col">
              <h5>Title</h5>
              <div className="h-[20px] text-[10px] bg-[#ffffff] px-1 flex items-center">
                {card.title}
              </div>
            </div>
            <div className="font-bold text-[10px] flex flex-col">
              <h5>Producer</h5>
              <div className="h-[20px] text-[10px] bg-[#ffffff] px-1 flex items-center">
                {card?.producer}
              </div>
            </div>
            <div className="font-bold text-[10px] flex flex-col">
              <h5>Genre</h5>
              <div className="h-[20px] text-[10px] bg-[#ffffff] px-1 flex items-center">
                {card?.seriesGenre}
              </div>
            </div>
            <Link
              key={card.id}
              href={`/content-department/submission/${card?.id}`}
            >
              <button
                type="submit"
                className="bg-[#0BF931] font-bold w-full mt-1 text-sm cursor-pointer"
              >
                SCREEN
              </button>
            </Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Cards;
