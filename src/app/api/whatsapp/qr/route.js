import { NextResponse } from 'next/server';
import { Client } from 'whatsapp-web.js';
import qrcode from 'qrcode'; // or any Base64 encoder

export async function GET() {
  return new Promise((resolve) => {
    const client = new Client();
    client.on('qr', (qrString) => {
      // Convert raw QR text to a Base64 PNG
      qrcode.toDataURL(qrString, (err, dataUrl) => {
        resolve(NextResponse.json({ qr: dataUrl }));
        client.destroy();
      });
    });
    client.initialize();
  });
}
