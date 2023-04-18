import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(req: Request) {
  try {
    const [gestiones]: any = await WebMasterPool.query(
      "SELECT submenu.id as idSubmenu, menu.id as idMenu, menu.name, menu.imagen, submenu.submenu, submenu.name as nombreSubmenu, submenu.link,submenu.Dinamic FROM menu INNER JOIN submenu on submenu.menu = menu.id WHERE menu.tipo LIKE 'gestion'"
    );

    const gestionNormalisada = gestiones.reduce((acc: any, el: any) => {
      let key = `${el.name}`;

      if (!acc[key]) {
        acc[key] = {
          titulo: el.name,
          idSubmenu: el.idSubmenu,
          idMenu: el.idMenu,
          submenus: [],
          imagen: el.imagen,
        };
      }
      acc[key]?.submenus?.push(el);

      return acc;
    }, {});

    return NextResponse.json(
      { gestiones: Object.values(gestionNormalisada) },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
