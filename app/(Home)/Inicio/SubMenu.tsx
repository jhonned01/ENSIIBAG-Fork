import Image from "next/image";
import Link from "next/link";
import React from "react";

const SubMenu = ({ img, external, click, link, description, title }: any) => {
  function handleEnlaces() {
    if (external) {
      return (
        <section
          title={description}
          className="cursor-pointer bg-white w-full h-auto overflow-hidden border-b border-[#006F46]"
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer h-full flex flex-col justify-around"
          >
            <div>
              <h1 className="font-bold lg:max-w-[17rem] m-auto  uppercase text-[#006F46] text-center text-[0.66rem] md:text-[0.8rem] lg:text-[0.8rem] xl:text-[1.2rem] leading-none">
                {title}
              </h1>
            </div>
            <div>
              <Image
                src={img}
                width={240}
                height={90}
                alt={img}
                className="object-contain"
              />
            </div>
          </a>
        </section>
      );
    } else {
      return (
        <Link href={`${link}`}>
          <section className=" flex flex-col justify-around cursor-pointer bg-white w-full h-auto overflow-hidden border-b border-[#006F46]">
            <div>
              <h1 className="font-bold lg:max-w-[17rem] m-auto  uppercase text-[#006F46] text-center text-[0.66rem] md:text-[0.8rem] lg:text-[0.8rem] xl:text-[1.2rem] leading-none">
                {title}
              </h1>
            </div>
            <div>
              <Image
                src={img}
                width={240}
                height={90}
                alt={img}
                className="object-contain"
              />
            </div>
          </section>
        </Link>
      );
    }
  }

  return <>{handleEnlaces()}</>;
};

export default SubMenu;
