"use client";
import Link from "next/link";
import React from "react";

const ItemMenu = ({ children, ruta, setIsOpen }: any) => {
  return (
    <li className=" mx-3 my-6 md:mx-1 ">
      <Link href={`${ruta}`}>
        <div className="uppercase md:text-base lg:text-xl">{children}</div>
      </Link>
    </li>
  );
};

export default ItemMenu;
