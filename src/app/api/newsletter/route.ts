// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        // Extract the body of the POST request
        const { phoneNumber } = await req.json();

        // Validate that phoneNumber exists and is a string
        if (!phoneNumber || typeof phoneNumber !== 'string') {
            return NextResponse.json(
                { error: 'Phone number is required and must be a string' },
                { status: 400 }
            );
        }

        // Here you would typically process the phone number (e.g., save to a database)
        // For now, let's just return it in the response as confirmation

        return NextResponse.json(
            { message: 'Thanks for joining our newsletter, we will send you updates soon', phoneNumber },
            { status: 200 }
        );
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { error: 'Invalid request format or server error' },
            { status: 500 }
        );
    }
}
