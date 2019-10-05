const XLSX = require('xlsx');

function Excel(){

}

Excel.prototype.convertExcelToJson = function(fullPathWithFileNameAndExtension) {
    var data = [];
    var workbook = XLSX.readFile(fullPathWithFileNameAndExtension);
    workbook.SheetNames.forEach(function(sheetName) {
        var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        data = [];
        var final = XL_row_object.map(curr => {
            var arr = Object.values(curr).map(val => val.trim());
            data.push([arr[0],arr[1],arr[2],arr[3],arr[4],arr[5]]);
        });
    })
    return data;
}

Excel.prototype.createListTypeA = function(data){
    var obj = {};
    for (var i = 0; i < data.length; i++) {
        var key = data[i][0];
        var val = data[i][2];
        obj[key] = val;
    }
    var sheet = "";
    Object.keys(obj).forEach( key => {
        sheet += `\n\t\t\t${key}="${obj[key]}"`;
    })
    return sheet;
}

Excel.prototype.createListTypeB = function(data){
    var sheet = "";
    for (var i = 0; i < data.length; i++) {
        var currRow = data[i];
        var prevRow = (i > 0)? data[i - 1] : 0;
        if(i == 0){
            sheet += `<${currRow[0]}\n\t\t\t\tjcr:primaryType="nt:unstructured"`;
        }else if(currRow[0] != prevRow[0]){
            sheet += `/>\n\t\t\t<${currRow[0]}\n\t\t\t\tjcr:primaryType="nt:unstructured"`;
        }
        sheet += `\n\t\t\t\t${currRow[1]}="${currRow[3]}"`;
    }
    sheet += `/>`;
    return sheet;
}

module.exports = Excel;
