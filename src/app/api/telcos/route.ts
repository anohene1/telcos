// app/api/telcos/route.ts
import { NextResponse } from 'next/server';

// Handle GET request for telcos API
export async function GET() {
    const telcos = [
        {
            name: 'MTN',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/New-mtn-logo.jpg',
        },
        {
            name: 'Telecel',
            logo: 'https://telecelgroup.com/wp-content/uploads/2022/09/cropped-icon-01-270x270.png',
        },
        {
            name: 'AT',
            logo: 'https://newsghana.com.gh/wp-content/uploads/2023/06/WhatsApp-Image-at-AM-28-640x537.jpeg',
        },
    ];

    return NextResponse.json(telcos);
}
