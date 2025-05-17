import Image from "next/image";
import React from "react";
import mapImg from "../../images/pexels-gabriele-donofrio-2150198707-31174249.jpg";

export default function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-4xl">ID : {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        {/* local Image */}
        <div>
          <Image src={mapImg} alt="maps" />
        </div>
        {/* remote image */}
        <div></div>
      </section>
    </div>
  );
}
