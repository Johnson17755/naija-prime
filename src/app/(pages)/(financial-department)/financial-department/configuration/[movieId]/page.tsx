import React from "react";
import { MovieDetails } from "@/components/financial-department/configuration/_component/MovieDetails";

const page = ({ params }: { params: { movieId: string } }) => {
  return (
    <>
      <MovieDetails movieId={params.movieId} />
    </>
  );
};

export default page;
