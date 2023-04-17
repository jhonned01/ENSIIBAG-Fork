import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";

export async function GET(req: Request) {
  // const { idItem, id, years } = await req?.json();
  const { searchParams } = new URL(req.url);

  const idItem: any = searchParams.get("idItem") || "";

  try {
    const [YearsIteam]: any = await WebMasterPool.query(
      `select count(*) as contador, year as year from pdf inner join item on item.id = pdf.item_id where item.item in (${idItem}) and estado = true group by year order by year DESC`
    );
    return NextResponse.json(
      {
        YearsIteam: YearsIteam,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: Request) {
  const { id, years } = await req?.json();
  try {
    if (id && years) {
      if (years == "Todos") {
        const [pdfTodos]: any = await WebMasterPool.query(
          `select *, pdf.nombre as pdf_nom from pdf inner join item on item.id = pdf.item_id where item.item in ("${id}") and estado = 1 `
        );

        return NextResponse.json(
          { pdfYears: pdfTodos },
          {
            status: 200,
          }
        );
      } else {
        const [pdfYears] = await WebMasterPool.query(
          `SELECT *, pdf.nombre as pdf_nom FROM pdf inner join item on item.id = pdf.item_id where item.item in ("${id}") and pdf.year in ("${years}") and estado = 1 `
        );
        return NextResponse.json(
          { pdfYears: pdfYears },
          {
            status: 200,
          }
        );
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
