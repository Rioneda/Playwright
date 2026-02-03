import * as XLSX from 'xlsx'
import path from 'path'

export function readExcel(sheetName: string) {
  const filePath = path.resolve(__dirname, '../Data/DataDrivePlaywright.xlsx')
  const workbook = XLSX.readFile(filePath)

  const sheet = workbook.Sheets[sheetName]
  return XLSX.utils.sheet_to_json(sheet, { defval: '' })

}