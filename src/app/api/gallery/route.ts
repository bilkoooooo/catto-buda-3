import {NextResponse} from "next/server";
import {getAllFiles} from "@services/GetAllImages";

export const dynamic = 'force-static'

export async function GET() {

    return NextResponse.json({...(await getAllFiles())}, {status: 200});
}

// // To handle a POST request to /api
// export async function POST(request) {
//     // Do whatever you want
//     return NextResponse.json({ message: "Hello World" }, { status: 200 });
// }