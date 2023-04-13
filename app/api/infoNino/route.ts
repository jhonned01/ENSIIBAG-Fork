import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(request: Request) {
  try {
    const [infoNino] = await WebMasterPool.query(
      "SELECT * FROM infoninos WHERE estado = 1 ORDER BY id ASC"
    );
    return NextResponse.json(
      {
        infoNino,
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
