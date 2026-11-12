import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

export async function downloadSheetsPdf(
  sheets: HTMLElement[],
  filename: string,
  onProgress?: (current: number, total: number) => void,
): Promise<void> {
  if (sheets.length === 0) return;
  await document.fonts.ready;
  const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait", compress: true });

  for (let index = 0; index < sheets.length; index++) {
    onProgress?.(index + 1, sheets.length);
    const sheet = sheets[index];
    if (!sheet) continue;
    const dataUrl = await toPng(sheet, {
      pixelRatio: 2,
      backgroundColor: "#ffffff",
      cacheBust: true,
    });
    if (index > 0) pdf.addPage();
    pdf.addImage(dataUrl, "PNG", 0, 0, 210, 297, undefined, "FAST");
  }

  pdf.save(filename);
}
