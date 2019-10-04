const fsExtra = require('fs-extra');
const replace = require('replace-in-file');
const XLSX = require('xlsx');
const {zip, unzip, list} = require('zip-unzip-promise');

var excelFileName = process.argv[2] || 'test.xlsx';
var excelFileNameWithoutExtn = excelFileName.substr(0, excelFileName.lastIndexOf('.'));


function init(){
  updateVariablesInAEMFiles();
}


/***************************************************************/

/*
fsExtra.emptyDirSync('./UNZIPPED');
unzip(`./${excelFileName}`, `./UNZIPPED/${excelFileNameWithoutExtn}`, { overwrite: true });
*/


/***************************************************************/

/*
var excelFileDataHolder = [];
function convertExcelToJson() {
	var workbook = XLSX.readFile(excelFileName);
    workbook.SheetNames.forEach(function(sheetName) {
        var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        excelFileDataHolder = [];
        var final = XL_row_object.map(curr => {
            var arr = Object.values(curr).map(val => val.trim());
            excelFileDataHolder.push([arr[0],arr[1],arr[2],arr[3],arr[4],arr[5]]);
        });
    })
	console.table(excelFileDataHolder);
}
*/

/***************************************************************/




function updateVariablesInAEMFiles(){
  const path = './UNZIPPED/LIST-TYPE-A-ver1';
  const NODEJS__USER__NAME = "admin";
  const NODEJS__TIME = "2019-10-04T11:47:12.450-04:00";
  const NODEJS__PACKAGE__NAME = "LIST-TYPE-A";
  const NODEJS__PACKAGE__VER = "ver1";
  const NODEJS__PACKAGE__DESC = "Demo";
  const NODEJS__PACKAGE__GROUP = "my_packages";
  const NODEJS__COUNTRY__NAME = "ES";
  const NODEJS__LANGUAGE__NAME = "en";
  const NODEJS__BUILD__COUNT = "5";
  const NODEJS__LIST__NAME = "DOCUPLOAD_SUPPORT_ID_LIST";
  const NODEJS__LIST__PATH = "content/wucom/wu-lists/languages";
  const NODEJS__LIST__HEADER = "COUNTRY_CODE,DOCTYPE_KEY,DOCTYPE_VALUE";
  const options = {
    files: [path + '/**/.*', path + '/**/*.*'],
    from: [/NODEJS__USER__NAME/g,/NODEJS__TIME/g,/NODEJS__PACKAGE__NAME/g,/NODEJS__PACKAGE__VER/g,/NODEJS__PACKAGE__DESC/g,/NODEJS__PACKAGE__GROUP/g,/NODEJS__COUNTRY__NAME/g,/NODEJS__LANGUAGE__NAME/g,/NODEJS__BUILD__COUNT/g,/NODEJS__LIST__NAME/g,/NODEJS__LIST__PATH/g,/NODEJS__LIST__HEADER/g],
    to: ["admin","2019-10-04T11:47:12.450-04:00","LIST-TYPE-A","ver1","Demo","my_packages","ES","en","5","DOCUPLOAD_SUPPORT_ID_LIST","content/wucom/wu-lists/languages","COUNTRY_CODE,DOCTYPE_KEY,DOCTYPE_VALUE"],
    dry: false,
    allowEmptyPaths : true
  };

  const results = replace.sync(options);
}

init();
