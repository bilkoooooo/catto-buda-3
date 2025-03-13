import {NextRequest, NextResponse} from "next/server";
import {getAllFiles} from "@services/GetAllImages";

export const dynamic = 'force-static'

export async function POST(request: NextRequest) {
    const {limit, offset} = await request.json();
    return NextResponse.json({...(await getAllFiles({limit, offset}))}, {status: 200});
}