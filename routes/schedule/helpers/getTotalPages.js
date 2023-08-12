import { promisify } from 'util';
import fs from 'fs';
import { PDFDocument } from 'pdf-lib';

export const getTotalPages = async (pdfPath) => {
	const pdfBuffer = await promisify(fs.readFile)(pdfPath);
	const pdfDoc = await PDFDocument.load(pdfBuffer);
	return pdfDoc.getPageCount();
};
