import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    const body = await req.json();
    const { name } = body;
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    if (!name) return new NextResponse("Name is required", { status: 400 });

    const store = await db.store.create({
      data: {
        name,
        userId: session.user.id,
      },
    });

    return NextResponse.json(store);
  } catch (error) {}
}
