"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseExcelToJsObject = void 0;
const XLSX = require("xlsx");
const path = require('path');
async function parseExcelToJsObject(relativePath) {
    const absolutePath = path.resolve(relativePath);
    const workbook = XLSX.readFile(absolutePath);
    const sheetNames = workbook.SheetNames;
    const firstSheetName = sheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);
    return data;
}
exports.parseExcelToJsObject = parseExcelToJsObject;
//# sourceMappingURL=parseExcelToJsObject.js.map