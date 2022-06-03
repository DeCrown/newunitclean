import Parser from "./parser";
import saveAs from "file-saver";
import ExcelJS from "exceljs";

const TableToExcel = (function(Parser) {
  let methods:any = {};

  methods.initWorkBook = function() {
    let wb = new ExcelJS.Workbook();
    return wb;
  };

  methods.initSheet = function(wb:ExcelJS.Workbook, sheetName:string) {
    let ws = wb.addWorksheet(sheetName);
    return ws;
  };

  methods.save = function(wb:ExcelJS.Workbook, fileName:string) {
    wb.xlsx.writeBuffer().then(function(buffer) {
      saveAs(
        new Blob([buffer], { type: "application/octet-stream" }),
        fileName
      );
    });
  };

  methods.tableToSheet = function(wb:ExcelJS.Workbook, table:HTMLElement, opts:any) {
    let ws = this.initSheet(wb, opts.sheet.name);
    ws = Parser.parseDomToTable(wb, ws, table, opts);
    return wb;
  };

  methods.tableToBook = function(table:HTMLElement, opts:any) {
    let wb = this.initWorkBook();
    wb = this.tableToSheet(wb, table, opts);
    return wb;
  };

  methods.convert = function(table:HTMLElement, opts:any = {}) {
    let defaultOpts = {
      name: "export.xlsx",
      autoStyle: false,
      sheet: {
        name: "Sheet 1"
      }
    };
    opts = { ...defaultOpts, ...opts };
    let wb = this.tableToBook(table, opts);
    this.save(wb, opts.name);
  };

  return methods;
})(Parser);

export default TableToExcel;
