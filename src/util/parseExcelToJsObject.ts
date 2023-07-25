import * as XLSX from 'xlsx';
const path = require('path');

export async function parseExcelToJsObject(relativePath: string) {
  // get relative path add . to url
  const absolutePath = path.resolve(relativePath);

  const workbook = XLSX.readFile(absolutePath);

  // Get sheet names
  const sheetNames = workbook.SheetNames;
  // Get data from first sheet
  const firstSheetName = sheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  const data = XLSX.utils.sheet_to_json(worksheet);
  return data;
}
