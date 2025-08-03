import { readFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function GET(request: NextRequest) {
  try {
    const pdfPath = join(
      process.cwd(),
      "public",
      "Sabbir-Nasir-Transformation-Framework.pdf"
    );
    const pdfBuffer = readFileSync(pdfPath);

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Sabbir-Nasir-Transformation-Framework.pdf"',
        "Content-Length": pdfBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Error serving PDF:", error);
    return NextResponse.json({ error: "PDF not found" }, { status: 404 });
  }
}
