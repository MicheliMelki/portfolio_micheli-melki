import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'sample-resume.pdf');
    const fileBuffer = await readFile(filePath);
    
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', 'attachment; filename="micheli_melki_resume.pdf"');
    headers.set('Content-Length', fileBuffer.length.toString());
    
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    console.error('Error reading PDF file:', error);
    return new NextResponse('File not found', { status: 404 });
  }
}