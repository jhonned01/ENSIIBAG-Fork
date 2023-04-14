import Image from "next/image";
function HorizonteItem({ horizonte, imagesHorizonte }: any) {
  const attachClassesToLinks = (htmlWithLinks: any) => {
    return htmlWithLinks;
  };

  return (
    <div>
      {horizonte?.error ? (
        <p>{horizonte?.error}</p>
      ) : (
        <div className="overflow-hidden  aspect-video rounded-xl relative group">
          <div className="rounded-xl z-40 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute bg-black/75 inset-0 -bottom-2 pt-30 text-white flex items-end">
            <div className="h-[25rem] overflow-auto p-4 pt-[12rem] sm:pt-[10rem] md:pt-[5rem] lg:pt-[6rem] space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold capitalize sm:text-[1.6rem] lg:text-xl xl:text-[2rem]">
                {horizonte?.tipo}
              </div>
              <hr />
              <div className="text-sm text-white sm:text-[1rem] lg:text-base font-medium xl:text-[1.15rem]">
                {horizonte?.contenido ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: attachClassesToLinks(horizonte?.contenido),
                    }}
                  />
                ) : (
                  <p className="text-white font-bold uppercase">
                    Registro pendiente por publicar desde WebMaster
                  </p>
                )}
              </div>
            </div>
          </div>
          {imagesHorizonte ? (
            <Image
              className="object-cover"
              src={imagesHorizonte}
              width={700}
              height={400}
              alt={imagesHorizonte}
            />
          ) : (
            <p>imagesHorizonte</p>
          )}
        </div>
      )}
    </div>
  );
}
export default HorizonteItem;
