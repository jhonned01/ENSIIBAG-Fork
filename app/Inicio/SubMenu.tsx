import Image from "next/image";
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
              <h1 className="font-bold lg:max-w-[17rem] m-auto  uppercase text-[#006F46] text-center text-[0.66rem] md:text-[0.7rem] lg:text-[0.6rem] xl:text-[1rem] leading-none">
                {title}
              </h1>
            </div>
            <Image
              src={img}
              width={195}
              height={45}
              alt={img}
              style={{ objectFit: "cover", margin: "auto" }}
            />
          </a>
        </section>
      );
    } else {
      return (
        <section
          onClick={() => click()}
          className=" flex flex-col justify-around cursor-pointer bg-white w-full h-auto  border-b border-[#006F46]"
        >
          <h1 className="font-bold lg:max-w-[17rem] m-auto  uppercase text-[#006F46] text-center text-[0.66rem] md:text-[0.7rem] lg:text-[0.6rem] xl:text-[1rem] leading-none">
            {title}
          </h1>

          <div>
            <Image
              src={img}
              width={195}
              height={45}
              alt={img}
              style={{ objectFit: "cover", margin: "auto" }}
            />
          </div>
        </section>
      );
    }
  }

  return <>{handleEnlaces()}</>;
};

export default SubMenu;
