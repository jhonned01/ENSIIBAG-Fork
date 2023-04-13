import Image from "next/image";
import React from "react";

const ItemSubMenu = ({ img, title, click }: any) => {
  return (
    <div
      onClick={() => click()}
      style={{ filter: "drop-shadow(0px 0px 4px #338C6B)" }}
      className="cursor-pointer rounded-2xl mx-4 bg-white px-10 py-10 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:bg-blue-100"
    >
      <Image
        src={img}
        height={200}
        width={200}
        alt={img}
        className="aspect-video w-96 rounded-2xl object-cover "
      />

      {/* text information */}
      <div className="text-center pt-2">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default ItemSubMenu;
