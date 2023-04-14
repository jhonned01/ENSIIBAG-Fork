import { NextResponse } from "next/server";
import { SygescolPool } from "@/config/db";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const correo: any = searchParams.get("correo");
  const correo2: any = searchParams.get("correo2");
  console.log("searchParams", searchParams);

  try {
    const [correoData]: any = await SygescolPool.query(
      `SELECT id_correo_inst, correo_insti 
      FROM correo_institucional 
      WHERE correo_insti LIKE '%${correo.replace(/\s+/g, "")}%'
        `
    );
    console.log("correoData", correoData);

    if (correoData?.length > 0) {
      return NextResponse.json(
        {
          correoData: correoData,
        },
        {
          status: 200,
        }
      );
    }
    const [correoData2]: any = await SygescolPool.query(
      `SELECT id_correo_inst, correo_insti 
      FROM correo_institucional 
      WHERE correo_insti LIKE '%${correo2.replace(/\s+/g, "")}%'
        `
    );
    console.log("correoData2", correoData2);

    if (correoData2?.length > 0) {
      return NextResponse.json(
        {
          correoData: correoData2,
        },
        {
          status: 200,
        }
      );
    }
    return NextResponse.json(
      {
        correoData: [],
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
