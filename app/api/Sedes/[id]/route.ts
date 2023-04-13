import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(req: Request, { params }: any) {
  const { id } = params;
  console.log("params=", params);

  try {
    const [InfoSedes]: any = await WebMasterPool.query(
      `SELECT id,nombre,direccion,telefonos,correo,horarios,imagen,principal FROM sedes WHERE id = '${id}'`
    );

    return NextResponse.json(
      {
        InfoSedes: InfoSedes[0],
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
