"use client";
import TitulosInternos from "@/app/Inicio/TitulosInternos";
import BusquedaAños from "./BusquedaAños";
import Image from "next/image";
import { useEffect, useState } from "react";

const Items = ({ response: data }: any) => {
  const [Data, setData] = useState({} as any);

  const GetData = async () => {
    const ItemId = await fetch("/api/ItemId").then((res) => res.json());
    setData(ItemId);
  };

  useEffect(() => {
    GetData();
  }, []);

  //   console.log("Data", Data);

  //   const router = useRouter();
  //   const { id } = router.query;
  //   console.log("========================id============");
  //   console.log(router.query.id[1]);
  //   console.log("====================================");

  const showData = () => {
    // if (data[0]?.msn || data[1]?.error) {
    //   return (
    //     <div>
    //       <p className="error">{data[0]?.msn}</p>
    //       <p className="error">{data[1]?.error}</p>
    //     </div>
    //   );
    // }
    if (Data?.data?.length > 0) {
      return <BusquedaAños response={Data?.data} id={"router?.query?.id[0]"} />;
    } else {
      return (
        <div className="container lg:w-[700px] flex flex-col p-4 mx-auto col-span-3">
          <Image
            className="object-cover"
            src="/Menu/PendienteWebMaster.png"
            width={1400}
            height={940}
            alt="PendienteWebMaster"
          />
          <p className="error">
            Registro pendiente por publicar desde WebMaster
          </p>
        </div>
      );
    }
  };
  return (
    <div>
      <TitulosInternos title={"router?.query?.id[1]"} />
      {showData()}
    </div>
  );
};

export default Items;

// export async function getServerSideProps({ query }) {
//   try {
//     const idItem = query.id[0];

//     const response = await axios
//       .post(`${process.env.APP_URL}api/ItemId`, {
//         idItem,
//       })
//       .then((res) => res.data);

//     return {
//       props: {
//         response: response,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         response: [
//           {
//             msn: "error al cargar los datos recargue la página si el error persiste contacte con soporte ",
//           },
//         ],
//       },
//     };
//   }
// }
