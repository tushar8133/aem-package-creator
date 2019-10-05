const fsExtra = require('fs-extra');
const {zip, unzip, list } = require('zip-unzip-promise');
const Excel = require('./Excel');
const Replacer = require('./Replacer');
var excelFileNameWithExtn = process.argv[2] || 'test.xlsx';
var excelFileName = excelFileNameWithExtn.substr(0, excelFileNameWithExtn.lastIndexOf('.'));
var listType = "A";
var listData;

function init(){

  console.log("Cleaning old files...");
  fsExtra.emptyDirSync('./unzipped');
  fsExtra.emptyDirSync('./zipped');

  setTimeout(function(){ doUnZip() }, 10000);

  setTimeout(function(){ listData = getExcelData() }, 20000);

  setTimeout(function(){ runReplacer(listData) }, 30000);

  setTimeout(function(){ doZip() }, 40000);


}

function getExcelData() {
    console.log("Collecting excel data");
    var excel = new Excel();
    var excelData = excel.convertExcelToJson("test.xlsx");
    var final = (listType == "A")? excel.createListTypeA(excelData) : excel.createListTypeB(excelData);
    return final;
}

function runReplacer(listData){
  console.log("Updating package with data");
  var r = new Replacer();
  r.doReplace(listData);
}

async function doUnZip(){
  console.log("Unpacking files");
  var aa = await unzip(`./aem_packages/PACKAGE_TYPE_${listType}.zip`, `./unzipped`, { overwrite: true });
}

async function doZip(){
  console.log("Creating final package");
  var bb = await zip('./unzipped/', './zipped/output.zip', {overwrite: true });
  console.log("Done! Please check 'zipped' folder");
}

init();

process.on('unhandledRejection', err => {});
