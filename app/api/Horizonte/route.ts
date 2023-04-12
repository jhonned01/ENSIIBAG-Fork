import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(request: Request) {
  try {
    const [horizonteMision] = await WebMasterPool.query(
      "SELECT * FROM `horizonte_inst` WHERE id = 1 ORDER BY id ASC"
    );

    const [horizonteVision] = await WebMasterPool.query(
      "SELECT * FROM `horizonte_inst` WHERE id = 2 ORDER BY id ASC"
    );

    return NextResponse.json(
      {
        MisionHorizonte: {
          nombre: "Misión",
          HoriEmpresarial: horizonteMision,
        },
        VisionHorizonte: {
          nombre: "Visión",
          HoriEmpresarial: horizonteVision,
        },
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
