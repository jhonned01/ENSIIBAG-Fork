import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(request: Request, { params: { id } }: any) {
  console.log("params", id);

  try {
    if (!id) {
      return NextResponse.json(
        { msn: "Id no valido" },
        {
          status: 200,
        }
      );
    }
    const [ItemSubMenu]: any = await WebMasterPool.query(
      `SELECT id as IdSubMenu,menu as IdMenu,contenido,name FROM submenu WHERE id = ${id}`
    );
    console.log(ItemSubMenu);

    return NextResponse.json(
      {
        ItemSubMenu: ItemSubMenu[0] || {},
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
