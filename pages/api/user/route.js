import { connectToDB } from "@/utils/database";

import { NextResponse } from "next/server";


export const GET = async(request) => {
    try {
        await connectToDB()
        const user = await UserActivation.find({})

        return NextResponse.json( user, {status: 200})
    }
    catch(error) {
            console.log(error).json(error)
        return NextResponse("Failed to fetch user", {status: 500} )
    }
}