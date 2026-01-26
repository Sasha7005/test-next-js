// app/api/notes/route.ts

import { NextRequest, NextResponse } from "next/server";
import { api, ApiError } from "../api";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId");

    const { data } = await api.get("/notes", {
      params: { categoryId },
    });

    return NextResponse.json(data);
  } catch (error) {
    const err = error as ApiError;

    return NextResponse.json(
      {
        error: err.response?.data?.error ?? err.message,
      },
      {
        status: err.response?.status ?? 500,
      },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { data } = await api.post("/notes", body);

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    const err = error as ApiError;

    return NextResponse.json(
      {
        error: err.response?.data?.error ?? err.message,
      },
      {
        status: err.response?.status ?? 500,
      },
    );
  }
}
