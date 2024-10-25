import Image from "next/image";
import Link from "next/link";

export const SingleMovie = ({ movie }: any) => {
  const bannerUrl = movie.bannerUrl?.startsWith("http")
    ? movie.bannerUrl
    : movie.bannerUrl?.startsWith("https")
    ? movie.bannerUrl
    : "/";

  const trailerUrl = movie.trailerUrl?.startsWith("http")
    ? movie.trailerUrl
    : movie.trailerUrl?.startsWith("https")
    ? movie.trailerUrl
    : "/";

  return (
    <>
      <div className="bg-[#d8d9d8] h-fit pb-2">
        <form className="py-3 px-2 flex items-center justify-between">
          <div className="flex flex-col gap-3 flex-1">
            <div className="flex flex-col items-start">
              <h3 className="text-[0.625rem] font-manrope font-bold text-[#000]">
                Banner
              </h3>
              {bannerUrl && (
                <Image
                  src={bannerUrl ?? ""}
                  width={160}
                  height={160}
                  alt="Movie Trailer Logo"
                  className="object-cover h-[5rem]"
                />
              )}
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-[0.625rem] font-manrope font-bold text-[#000]">
                Trailer
              </h3>
              <div className="bg-[#a0a0a1] w-full flex justify-center items-center border-2 border-dotted border-[#000]">
                {trailerUrl && (
                  <Image
                    src={trailerUrl ?? ""}
                    width={30}
                    height={30}
                    alt="Player Logo"
                    className="object-cover h-[3rem]"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 flex-1">
            <div className="flex flex-col">
              <span className="text-[0.625rem] text-[#000] font-manrope font-bold">
                Title
              </span>
              <div className="w-[5.3rem] 2xl:w-[9rem] h-[1.4rem] bg-[#fff] text-[0.8rem] pl-1">
                {movie.title ?? ""}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[0.625rem] text-[#000] font-manrope font-bold">
                Producer
              </span>
              <div className="w-[5.3rem] 2xl:w-[9rem] h-[1.4rem] bg-[#fff] text-[0.8rem] pl-1">
                {movie.producer ?? ""}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[0.625rem] text-[#000] font-manrope font-bold">
                Genre
              </span>
              <div className="w-[5.3rem] 2xl:w-[9rem] h-[1.4rem] bg-[#fff] text-[0.8rem] pl-1">
                {movie.seriesGenre ?? ""}
              </div>
            </div>
            <Link href={`/financial-department/configuration/${movie.id}`}>
              <button
                type="button"
                className="bg-[#0af930] text-[0.625rem] font-manrope font-bold px-4 py-1 rounded-xl outline outline-1"
              >
                Configure
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
