import Image from "next/image";
import { IoIosPlay } from "react-icons/io";
import Link from "next/link";
import { CardData } from "@/types";

interface CardsProps {
  cardsData: CardData[];
}

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

const Cards: React.FC<CardsProps> = ({ cardsData }) => {
  return (
    <div>
      {cardsData.map((card) => (
        <div key={card.id} className="grid grid-cols-2 gap-2 p-2">
          <div>
            <div>
              <h6 className="font-bold text-[10px]">Banner</h6>
              <div className="h-10">
                <Image
                  // src={card.bannerUrl}
                  src={
                    card.bannerUrl.startsWith("http")
                      ? card.bannerUrl
                      : `${baseUrl}/${card.bannerUrl}`
                  }
                  alt="Banner"
                  className="h-full"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div>
              <h6 className="font-bold text-[10px]">Trailer</h6>
              <div className="h-10 border border-dashed border-black bg-[#73737357] flex items-center justify-center">
                <IoIosPlay />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="font-bold text-[10px] flex flex-col">
                <h5>Title</h5>
                <div className="h-[20px] text-[10px] bg-[#ffffff] px-1 flex items-center">
                  {card.title}
                </div>
              </div>
              <div className="font-bold text-[10px] flex flex-col">
                <h5>Producer</h5>
                <div className="h-[20px] text-[10px] bg-[#ffffff] px-1 flex items-center">
                  {card.producer}
                </div>
              </div>
              <div className="font-bold text-[10px] flex flex-col">
                <h5>Genre</h5>
                <div className="h-[20px] text-[10px] bg-[#ffffff] px-1 flex items-center">
                  {card.seriesGenre}
                </div>
              </div>
              <Link
                key={card.id}
                href={`/schedule-department/schedule-request/${card.id}`}
              >
                <button
                  type="submit"
                  className="bg-[#0BF931] font-bold w-full mt-1 rounded-2xl border border-black text-sm cursor-pointer"
                >
                  SCHEDULE
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
