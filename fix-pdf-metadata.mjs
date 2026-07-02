import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function updateMetadata(filePath, title) {
  try {
    const pdfBytes = fs.readFileSync(filePath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    pdfDoc.setTitle(title);
    pdfDoc.setAuthor('ACER');
    pdfDoc.setSubject('Transparência Ativa');
    const modifiedPdfBytes = await pdfDoc.save();
    fs.writeFileSync(filePath, modifiedPdfBytes);
    console.log(`Sucesso: ${path.basename(filePath)} -> "${title}"`);
  } catch (error) {
    console.error(`Erro ao atualizar ${filePath}:`, error);
  }
}

async function main() {
  await updateMetadata(
    'public/documentos/cotacao-previa-001-2026.pdf',
    'Cotação Prévia de Preços Nº 001/2026 - ACER'
  );
  await updateMetadata(
    'public/documentos/retificacao-cotacao-001-2026.pdf',
    'Retificação da Cotação Prévia de Preços Nº 001/2026 - ACER'
  );
}

main();
